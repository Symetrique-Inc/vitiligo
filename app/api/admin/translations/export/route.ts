import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';



export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get('format') || 'json'; // json or csv
    const languageCode = searchParams.get('language') || 'all';
    const page = searchParams.get('page') || 'all';
    const status = searchParams.get('status') || 'all';

    const where: any = { isActive: true };
    if (page !== 'all') where.page = page;

    const keys = await prisma.translationKey.findMany({
      where,
      orderBy: [{ page: 'asc' }, { section: 'asc' }, { key: 'asc' }],
      include: {
        translations: {
          where: languageCode !== 'all' ? { languageCode } : undefined,
          include: { language: true },
        },
      },
    });

    if (format === 'csv') {
      // CSV format
      const languages =
        languageCode !== 'all'
          ? [languageCode]
          : ['en', 'hi', 'mr', 'bn', 'ta', 'te', 'kn'];

      const headers = ['Key', 'Page', 'Section', 'English (Source)', ...languages.map((l) => `${l.toUpperCase()} Translation`), ...languages.map((l) => `${l.toUpperCase()} Status`)];

      const csvRows = [headers.join(',')];

      for (const k of keys) {
        const transMap: Record<string, { text: string; status: string }> = {};
        for (const t of k.translations) {
          transMap[t.languageCode] = { text: t.translatedText, status: t.status };
        }

        const escapeCsv = (val: string = '') => `"${(val || '').replace(/"/g, '""').replace(/\n/g, '\\n')}"`;

        const row = [
          escapeCsv(k.key),
          escapeCsv(k.page),
          escapeCsv(k.section),
          escapeCsv(k.sourceText),
          ...languages.map((l) => escapeCsv(transMap[l]?.text || '')),
          ...languages.map((l) => escapeCsv(transMap[l]?.status || 'MISSING')),
        ];

        csvRows.push(row.join(','));
      }

      const csvContent = csvRows.join('\r\n');
      return new NextResponse(csvContent, {
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="onevitiligo-translations-${page}-${languageCode}-${Date.now()}.csv"`,
        },
      });
    }

    // JSON format
    const jsonData = keys.map((k) => {
      const transObj: Record<string, any> = {};
      for (const t of k.translations) {
        transObj[t.languageCode] = {
          text: t.translatedText,
          status: t.status,
          isPublished: t.isPublished,
          publishedText: t.publishedText,
          updatedAt: t.updatedAt,
        };
      }
      return {
        key: k.key,
        page: k.page,
        section: k.section,
        component: k.component,
        sourceText: k.sourceText,
        translations: transObj,
      };
    });

    return new NextResponse(JSON.stringify(jsonData, null, 2), {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Disposition': `attachment; filename="onevitiligo-translations-${page}-${languageCode}-${Date.now()}.json"`,
      },
    });
  } catch (error: any) {
    console.error('Export error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

