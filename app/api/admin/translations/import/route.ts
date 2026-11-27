import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { TranslationService } from '@/lib/translationService';
import { getAdminUserFromRequest } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const user = await getAdminUserFromRequest(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized: Admin authentication required' }, { status: 401 });
    }
    const userName = user.name || 'Super Admin';

    const body = await request.json();
    const { format = 'json', content, previewOnly = true, targetStatus = 'DRAFT' } = body;

    if (!content) {
      return NextResponse.json({ error: 'No content provided' }, { status: 400 });
    }

    const languages = await prisma.supportedLanguage.findMany({ select: { code: true } });
    const validLanguageCodes = new Set(languages.map((l) => l.code));

    let parsedEntries: Array<{
      key: string;
      page?: string;
      section?: string;
      sourceText?: string;
      translations: Record<string, string>;
    }> = [];

    if (format === 'json') {
      try {
        const raw = typeof content === 'string' ? JSON.parse(content) : content;
        if (!Array.isArray(raw)) throw new Error('JSON import must be an array of translation items');

        for (const item of raw) {
          if (!item.key) continue;
          const translations: Record<string, string> = {};
          if (item.translations && typeof item.translations === 'object') {
            for (const [lang, val] of Object.entries(item.translations)) {
              if (validLanguageCodes.has(lang)) {
                translations[lang] = typeof val === 'string' ? val : (val as any).text || '';
              }
            }
          }
          parsedEntries.push({
            key: item.key,
            page: item.page,
            section: item.section,
            sourceText: item.sourceText,
            translations,
          });
        }
      } catch (e: any) {
        return NextResponse.json({ error: `JSON parse error: ${e.message}` }, { status: 400 });
      }
    } else if (format === 'csv') {
      // Basic CSV Parser
      const lines = content.split(/\r?\n/).filter((l: string) => l.trim().length > 0);
      if (lines.length < 2) {
        return NextResponse.json({ error: 'CSV must have header and at least one data row' }, { status: 400 });
      }

      const parseCsvLine = (line: string): string[] => {
        const result: string[] = [];
        let cur = '';
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
          const c = line[i];
          if (c === '"') {
            if (inQuotes && line[i + 1] === '"') {
              cur += '"';
              i++;
            } else {
              inQuotes = !inQuotes;
            }
          } else if (c === ',' && !inQuotes) {
            result.push(cur);
            cur = '';
          } else {
            cur += c;
          }
        }
        result.push(cur);
        return result;
      };

      const header = parseCsvLine(lines[0]).map((h) => h.trim().toLowerCase());
      const keyIdx = header.findIndex((h) => h === 'key');
      const enIdx = header.findIndex((h) => h.includes('english') || h === 'en');

      if (keyIdx === -1) {
        return NextResponse.json({ error: 'CSV must contain a "Key" column' }, { status: 400 });
      }

      for (let i = 1; i < lines.length; i++) {
        const cols = parseCsvLine(lines[i]);
        const key = cols[keyIdx]?.trim();
        if (!key) continue;

        const translations: Record<string, string> = {};
        for (let j = 0; j < header.length; j++) {
          const colName = header[j];
          for (const lang of validLanguageCodes) {
            if (colName === lang || colName.startsWith(`${lang} `)) {
              const text = cols[j]?.trim();
              if (text) translations[lang] = text;
            }
          }
        }

        parsedEntries.push({
          key,
          sourceText: enIdx !== -1 ? cols[enIdx]?.trim() : undefined,
          translations,
        });
      }
    }

    // Validation & Preview calculation
    const validationSummary = {
      totalFound: parsedEntries.length,
      validKeys: 0,
      missingKeys: [] as string[],
      totalTranslationUpdates: 0,
      preview: [] as any[],
    };

    const keysInDb = await prisma.translationKey.findMany({
      where: { key: { in: parsedEntries.map((e) => e.key) } },
      select: { id: true, key: true, sourceText: true },
    });
    const keyMap = new Map(keysInDb.map((k) => [k.key, k]));

    for (const entry of parsedEntries) {
      const existing = keyMap.get(entry.key);
      if (existing) {
        validationSummary.validKeys++;
        const updateCount = Object.keys(entry.translations).length;
        validationSummary.totalTranslationUpdates += updateCount;
        if (validationSummary.preview.length < 10) {
          validationSummary.preview.push({
            key: entry.key,
            existingEnglish: existing.sourceText,
            languagesUpdated: Object.keys(entry.translations),
            sample: entry.translations,
          });
        }
      } else {
        validationSummary.missingKeys.push(entry.key);
      }
    }

    // If preview only, return validation summary
    if (previewOnly) {
      return NextResponse.json({
        preview: true,
        summary: validationSummary,
      });
    }

    // Apply translations
    let appliedCount = 0;
    await prisma.$transaction(async (tx) => {
      for (const entry of parsedEntries) {
        const existingKey = keyMap.get(entry.key);
        if (!existingKey) continue;

        for (const [langCode, newText] of Object.entries(entry.translations)) {
          if (!newText || !newText.trim()) continue;

          const existingTrans = await tx.translation.findUnique({
            where: {
              translationKeyId_languageCode: {
                translationKeyId: existingKey.id,
                languageCode: langCode,
              },
            },
          });

          if (existingTrans) {
            if (existingTrans.translatedText !== newText) {
              await tx.translationHistory.create({
                data: {
                  translationId: existingTrans.id,
                  previousText: existingTrans.translatedText,
                  newText,
                  previousStatus: existingTrans.status,
                  newStatus: targetStatus,
                  changedBy: userName,
                  changeReason: `Bulk ${format.toUpperCase()} Import`,
                },
              });

              await tx.translation.update({
                where: { id: existingTrans.id },
                data: {
                  translatedText: newText,
                  status: targetStatus,
                  version: { increment: 1 },
                  updatedBy: userName,
                },
              });
              appliedCount++;
            }
          }
        }
      }
    });

    TranslationService.invalidateCache();

    return NextResponse.json({
      success: true,
      appliedCount,
      summary: validationSummary,
    });
  } catch (error: any) {
    console.error('Import error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

