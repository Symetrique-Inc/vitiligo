import { prisma } from './prisma';

export interface TranslationStatBreakdown {
  totalKeys: number;
  totalPages: number;
  totalLanguages: number;
  publishedCount: number;
  pendingCount: number; // Draft + In Review
  missingCount: number;
  languageStats: {
    code: string;
    name: string;
    nativeName: string;
    total: number;
    published: number;
    approved: number;
    inReview: number;
    draft: number;
    missing: number;
    completionPercentage: number;
    status: 'Complete' | 'In Progress' | 'Needs Attention';
  }[];
  recentActivity: {
    id: string;
    key: string;
    page: string;
    languageCode: string;
    status: string;
    updatedAt: string;
    updatedBy: string;
  }[];
}

// In-memory cache for live published translations
interface CacheEntry {
  timestamp: number;
  data: Record<string, string>;
  vthMap: Record<string, Record<string, string>>;
}

const CACHE_TTL_MS = 60 * 1000; // 1 minute TTL, but invalidated on publish
const translationCache: Record<string, CacheEntry> = {};

export class TranslationService {
  /**
   * Invalidate memory cache
   */
  static invalidateCache() {
    for (const key of Object.keys(translationCache)) {
      delete translationCache[key];
    }
  }

  /**
   * Fetch published translations for live website
   */
  static async getPublishedTranslations(locale: string = 'en'): Promise<{
    byText: Record<string, string>;
    byKey: Record<string, string>;
  }> {
    const cached = translationCache[locale];
    const now = Date.now();
    if (cached && now - cached.timestamp < CACHE_TTL_MS) {
      return {
        byText: cached.data,
        byKey: cached.vthMap[locale] || {},
      };
    }

    try {
      const records = await prisma.translation.findMany({
        where: {
          languageCode: locale,
          isPublished: true,
          publishedText: { not: null },
        },
        include: {
          translationKey: true,
        },
      });

      const byText: Record<string, string> = {};
      const byKey: Record<string, string> = {};

      for (const item of records) {
        const text = item.publishedText || item.translatedText;
        if (text) {
          byKey[item.translationKey.key] = text;
          byText[item.translationKey.sourceText] = text;
        }
      }

      translationCache[locale] = {
        timestamp: now,
        data: byText,
        vthMap: { [locale]: byKey },
      };

      return { byText, byKey };
    } catch (err) {
      console.error('Failed to load published translations from DB:', err);
      return { byText: {}, byKey: {} };
    }
  }

  /**
   * Fetch draft translations for Admin Preview mode
   */
  static async getDraftTranslations(locale: string = 'en'): Promise<{
    byText: Record<string, string>;
    byKey: Record<string, string>;
  }> {
    const records = await prisma.translation.findMany({
      where: {
        languageCode: locale,
      },
      include: {
        translationKey: true,
      },
    });

    const byText: Record<string, string> = {};
    const byKey: Record<string, string> = {};

    for (const item of records) {
      const text = item.translatedText || item.publishedText || item.translationKey.sourceText;
      byKey[item.translationKey.key] = text;
      byText[item.translationKey.sourceText] = text;
    }

    return { byText, byKey };
  }

  /**
   * Get dynamic translation statistics
   */
  static async getStats(): Promise<TranslationStatBreakdown> {
    const totalKeys = await prisma.translationKey.count({ where: { isActive: true } });

    // Distinct pages
    const pagesResult = await prisma.translationKey.findMany({
      where: { isActive: true },
      select: { page: true },
      distinct: ['page'],
    });
    const totalPages = pagesResult.length;

    const languages = await prisma.supportedLanguage.findMany({
      where: { isEnabled: true },
      orderBy: { sortOrder: 'asc' },
    });

    // Group translations by language and status
    const groupResult = await prisma.translation.groupBy({
      by: ['languageCode', 'status'],
      where: {
        translationKey: { isActive: true },
      },
      _count: { id: true },
    });

    const countsByLang: Record<string, Record<string, number>> = {};
    for (const g of groupResult) {
      if (!countsByLang[g.languageCode]) countsByLang[g.languageCode] = {};
      countsByLang[g.languageCode][g.status] = g._count.id;
    }

    let globalPublished = 0;
    let globalPending = 0;
    let globalMissing = 0;

    const languageStats = languages.map((lang) => {
      const counts = countsByLang[lang.code] || {};
      const published = counts['PUBLISHED'] || 0;
      const approved = counts['APPROVED'] || 0;
      const inReview = counts['IN_REVIEW'] || 0;
      const draft = counts['DRAFT'] || 0;
      const missing = counts['MISSING'] || 0;

      // Completion calculation
      const translatedCount = published + approved + (lang.code === 'en' ? 0 : inReview + draft);
      const completionPercentage = totalKeys > 0 ? Math.min(100, Math.round((published / totalKeys) * 100)) : 100;

      globalPublished += published;
      globalPending += approved + inReview + draft;
      globalMissing += missing;

      let statusLabel: 'Complete' | 'In Progress' | 'Needs Attention' = 'In Progress';
      if (completionPercentage === 100) statusLabel = 'Complete';
      else if (completionPercentage < 50) statusLabel = 'Needs Attention';

      return {
        code: lang.code,
        name: lang.name,
        nativeName: lang.nativeName,
        total: totalKeys,
        published,
        approved,
        inReview,
        draft,
        missing,
        completionPercentage,
        status: statusLabel,
      };
    });

    // Recent Activity
    const recentTranslations = await prisma.translation.findMany({
      where: { translationKey: { isActive: true } },
      orderBy: { updatedAt: 'desc' },
      take: 8,
      include: {
        translationKey: {
          select: { key: true, page: true },
        },
      },
    });

    const recentActivity = recentTranslations.map((t) => ({
      id: t.id,
      key: t.translationKey.key,
      page: t.translationKey.page,
      languageCode: t.languageCode,
      status: t.status,
      updatedAt: t.updatedAt.toISOString(),
      updatedBy: t.updatedBy,
    }));

    return {
      totalKeys,
      totalPages,
      totalLanguages: languages.length,
      publishedCount: globalPublished,
      pendingCount: globalPending,
      missingCount: globalMissing,
      languageStats,
      recentActivity,
    };
  }

  /**
   * Search and filter translation entries for side-by-side editor
   */
  static async getEditorTranslations(filters: {
    page?: string;
    section?: string;
    status?: string;
    language?: string;
    search?: string;
    pageIndex?: number;
    pageSize?: number;
  }) {
    const {
      page,
      section,
      status,
      language,
      search,
      pageIndex = 0,
      pageSize = 20,
    } = filters;

    const where: any = {
      isActive: true,
    };

    if (page && page !== 'all') {
      where.page = page;
    }

    if (section && section !== 'all') {
      where.section = section;
    }

    if (search && search.trim()) {
      const q = search.trim();
      where.OR = [
        { key: { contains: q } },
        { sourceText: { contains: q } },
        {
          translations: {
            some: {
              translatedText: { contains: q },
            },
          },
        },
      ];
    }

    if (status && status !== 'all') {
      if (language && language !== 'all') {
        where.translations = {
          some: {
            languageCode: language,
            status,
          },
        };
      } else {
        where.translations = {
          some: {
            status,
          },
        };
      }
    }

    const total = await prisma.translationKey.count({ where });

    const keys = await prisma.translationKey.findMany({
      where,
      skip: pageIndex * pageSize,
      take: pageSize,
      orderBy: [{ page: 'asc' }, { section: 'asc' }, { key: 'asc' }],
      include: {
        translations: {
          orderBy: { language: { sortOrder: 'asc' } },
        },
      },
    });

    return {
      total,
      pageIndex,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
      items: keys,
    };
  }

  /**
   * Save draft translation
   */
  static async updateTranslation(data: {
    id: string;
    translatedText: string;
    status?: string;
    user: string;
    reason?: string;
  }) {
    const current = await prisma.translation.findUnique({
      where: { id: data.id },
      include: { translationKey: true },
    });

    if (!current) throw new Error('Translation not found');

    const nextStatus = data.status || (current.status === 'PUBLISHED' ? 'DRAFT' : current.status);

    const updated = await prisma.$transaction(async (tx) => {
      // 1. Record History
      await tx.translationHistory.create({
        data: {
          translationId: current.id,
          previousText: current.translatedText,
          newText: data.translatedText,
          previousStatus: current.status,
          newStatus: nextStatus,
          changedBy: data.user,
          changeReason: data.reason || 'Manual Super Admin Edit',
        },
      });

      // 2. Update Translation
      return tx.translation.update({
        where: { id: data.id },
        data: {
          translatedText: data.translatedText,
          status: nextStatus,
          version: { increment: 1 },
          updatedBy: data.user,
        },
      });
    });

    return updated;
  }

  /**
   * Save all translations for a single key
   */
  static async updateKeyTranslations(data: {
    keyId: string;
    translations: { languageCode: string; translatedText: string; status?: string }[];
    user: string;
    reason?: string;
  }) {
    const results = [];
    for (const item of data.translations) {
      const existing = await prisma.translation.findUnique({
        where: {
          translationKeyId_languageCode: {
            translationKeyId: data.keyId,
            languageCode: item.languageCode,
          },
        },
      });

      if (existing) {
        const nextStatus = item.status || (existing.status === 'PUBLISHED' ? 'DRAFT' : existing.status);
        const res = await prisma.$transaction(async (tx) => {
          if (existing.translatedText !== item.translatedText || existing.status !== nextStatus) {
            await tx.translationHistory.create({
              data: {
                translationId: existing.id,
                previousText: existing.translatedText,
                newText: item.translatedText,
                previousStatus: existing.status,
                newStatus: nextStatus,
                changedBy: data.user,
                changeReason: data.reason || 'Batch Language Edit',
              },
            });
          }

          return tx.translation.update({
            where: { id: existing.id },
            data: {
              translatedText: item.translatedText,
              status: nextStatus,
              version: { increment: 1 },
              updatedBy: data.user,
            },
          });
        });
        results.push(res);
      }
    }
    return results;
  }

  /**
   * Approve translations
   */
  static async approveTranslations(data: {
    translationIds: string[];
    user: string;
  }) {
    const updated = await prisma.$transaction(async (tx) => {
      const records = await tx.translation.findMany({
        where: { id: { in: data.translationIds } },
      });

      for (const rec of records) {
        await tx.translationHistory.create({
          data: {
            translationId: rec.id,
            previousText: rec.translatedText,
            newText: rec.translatedText,
            previousStatus: rec.status,
            newStatus: 'APPROVED',
            changedBy: data.user,
            changeReason: 'Super Admin Approved',
          },
        });
      }

      return tx.translation.updateMany({
        where: { id: { in: data.translationIds } },
        data: {
          status: 'APPROVED',
          updatedBy: data.user,
        },
      });
    });

    return updated;
  }

  /**
   * Publish translations (makes them live)
   */
  static async publishTranslations(data: {
    scope: 'ALL' | 'PAGE' | 'LANGUAGE' | 'SELECTED';
    page?: string;
    languageCode?: string;
    translationIds?: string[];
    user: string;
  }) {
    const where: any = {
      translationKey: { isActive: true },
    };

    if (data.scope === 'SELECTED' && data.translationIds?.length) {
      where.id = { in: data.translationIds };
    } else if (data.scope === 'PAGE' && data.page) {
      where.translationKey.page = data.page;
      where.status = { in: ['APPROVED', 'DRAFT', 'IN_REVIEW'] };
    } else if (data.scope === 'LANGUAGE' && data.languageCode) {
      where.languageCode = data.languageCode;
      where.status = { in: ['APPROVED', 'DRAFT', 'IN_REVIEW'] };
    } else if (data.scope === 'ALL') {
      where.status = { in: ['APPROVED', 'DRAFT', 'IN_REVIEW'] };
    }

    const eligible = await prisma.translation.findMany({
      where,
      select: { id: true, translatedText: true, status: true },
    });

    const now = new Date();

    const publishCount = await prisma.$transaction(async (tx) => {
      let count = 0;
      for (const t of eligible) {
        if (t.translatedText && t.translatedText.trim()) {
          await tx.translationHistory.create({
            data: {
              translationId: t.id,
              previousText: t.translatedText,
              newText: t.translatedText,
              previousStatus: t.status,
              newStatus: 'PUBLISHED',
              changedBy: data.user,
              changeReason: `Published via ${data.scope} action`,
            },
          });

          await tx.translation.update({
            where: { id: t.id },
            data: {
              publishedText: t.translatedText,
              isPublished: true,
              status: 'PUBLISHED',
              publishedAt: now,
              updatedBy: data.user,
            },
          });
          count++;
        }
      }

      await tx.translationPublishLog.create({
        data: {
          scope: data.scope,
          page: data.page || null,
          languageCode: data.languageCode || null,
          publishedBy: data.user,
          changesCount: count,
          details: JSON.stringify({
            scope: data.scope,
            publishedAt: now.toISOString(),
            eligibleCount: eligible.length,
          }),
        },
      });

      return count;
    });

    // Invalidate cache immediately!
    this.invalidateCache();

    return {
      success: true,
      publishedCount: publishCount,
      scope: data.scope,
    };
  }

  /**
   * Revert translation to previously published version
   */
  static async revertToPublished(translationId: string, user: string) {
    const translation = await prisma.translation.findUnique({
      where: { id: translationId },
    });

    if (!translation) throw new Error('Translation not found');
    if (!translation.publishedText) throw new Error('No previously published text found to revert to');

    const reverted = await prisma.$transaction(async (tx) => {
      await tx.translationHistory.create({
        data: {
          translationId: translation.id,
          previousText: translation.translatedText,
          newText: translation.publishedText!,
          previousStatus: translation.status,
          newStatus: 'PUBLISHED',
          changedBy: user,
          changeReason: 'Reverted to last published version',
        },
      });

      return tx.translation.update({
        where: { id: translation.id },
        data: {
          translatedText: translation.publishedText!,
          status: 'PUBLISHED',
          updatedBy: user,
        },
      });
    });

    return reverted;
  }

  /**
   * Add a new translation key (Requirement 9)
   */
  static async addTranslationKey(data: {
    key: string;
    page: string;
    section: string;
    component?: string;
    description?: string;
    sourceText: string;
    translations?: Record<string, string>;
    user: string;
  }) {
    const existing = await prisma.translationKey.findUnique({
      where: { key: data.key },
    });

    if (existing) {
      throw new Error(`Translation key "${data.key}" already exists`);
    }

    const languages = await prisma.supportedLanguage.findMany({
      where: { isEnabled: true },
    });

    const newKey = await prisma.$transaction(async (tx) => {
      const createdKey = await tx.translationKey.create({
        data: {
          key: data.key,
          page: data.page,
          section: data.section,
          component: data.component || null,
          description: data.description || null,
          sourceText: data.sourceText,
        },
      });

      for (const lang of languages) {
        const isEn = lang.code === 'en';
        const providedText = data.translations?.[lang.code] || (isEn ? data.sourceText : '');
        const hasText = Boolean(providedText && providedText.trim());

        const status = isEn ? 'PUBLISHED' : hasText ? 'DRAFT' : 'MISSING';

        await tx.translation.create({
          data: {
            translationKeyId: createdKey.id,
            languageCode: lang.code,
            translatedText: providedText,
            status,
            isPublished: isEn,
            publishedText: isEn ? data.sourceText : null,
            updatedBy: data.user,
          },
        });
      }

      return createdKey;
    });

    this.invalidateCache();
    return newKey;
  }

  /**
   * Update key English source text (detects change & flags others as IN_REVIEW)
   */
  static async updateKeySource(data: {
    id: string;
    sourceText: string;
    page?: string;
    section?: string;
    component?: string;
    description?: string;
    user: string;
  }) {
    const existing = await prisma.translationKey.findUnique({
      where: { id: data.id },
      include: { translations: true },
    });

    if (!existing) throw new Error('Key not found');

    const sourceChanged = existing.sourceText !== data.sourceText;

    const updated = await prisma.$transaction(async (tx) => {
      const keyRecord = await tx.translationKey.update({
        where: { id: data.id },
        data: {
          sourceText: data.sourceText,
          page: data.page ?? existing.page,
          section: data.section ?? existing.section,
          component: data.component ?? existing.component,
          description: data.description ?? existing.description,
          sourceVersion: sourceChanged ? { increment: 1 } : existing.sourceVersion,
        },
      });

      // Update English translation
      const enTrans = existing.translations.find((t) => t.languageCode === 'en');
      if (enTrans) {
        await tx.translation.update({
          where: { id: enTrans.id },
          data: {
            translatedText: data.sourceText,
            publishedText: data.sourceText,
            updatedBy: data.user,
          },
        });
      }

      // If source text changed, flag all other language translations as IN_REVIEW!
      if (sourceChanged) {
        for (const t of existing.translations) {
          if (t.languageCode !== 'en') {
            await tx.translationHistory.create({
              data: {
                translationId: t.id,
                previousText: t.translatedText,
                newText: t.translatedText,
                previousStatus: t.status,
                newStatus: 'IN_REVIEW',
                changedBy: data.user,
                changeReason: 'English source text was modified — flagged for re-review',
              },
            });

            await tx.translation.update({
              where: { id: t.id },
              data: {
                status: 'IN_REVIEW',
                updatedBy: data.user,
              },
            });
          }
        }
      }

      return keyRecord;
    });

    this.invalidateCache();
    return updated;
  }
}
