import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { ensureDatabaseInitialized, determinePageAndSection } from '@/lib/dbInit';
import { getAdminUserFromRequest } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    await ensureDatabaseInitialized();

    let adminCount = await prisma.adminUser.count();
    if (adminCount > 0) {
      const user = await getAdminUserFromRequest(request);
      if (!user) {
        return NextResponse.json(
          { error: 'Unauthorized: Admin authentication required' },
          { status: 401 }
        );
      }
    }

    const { searchParams } = new URL(request.url);
    const shouldReclassify = searchParams.get('reclassify') === 'true';

    if (shouldReclassify) {
      const allKeys = await prisma.translationKey.findMany({
        select: { id: true, key: true, sourceText: true },
      });
      for (const k of allKeys) {
        const { page, section, component } = determinePageAndSection(k.key, k.sourceText);
        await prisma.translationKey.update({
          where: { id: k.id },
          data: { page, section, component },
        });
      }
    }

    adminCount = await prisma.adminUser.count();
    const languageCount = await prisma.supportedLanguage.count();
    const keyCount = await prisma.translationKey.count();
    const translationCount = await prisma.translation.count();

    const pageBreakdown = await prisma.translationKey.groupBy({
      by: ['page'],
      where: { isActive: true },
      _count: { id: true },
    });

    return NextResponse.json({
      success: true,
      message: 'Database schema and Super Admin initialized successfully',
      stats: {
        adminCount,
        languageCount,
        keyCount,
        translationCount,
        pages: pageBreakdown.map((p) => ({ page: p.page, count: p._count.id })),
      },
      dbTarget: {
        host: process.env.DB_HOST || '127.0.0.1',
        database: process.env.DB_NAME || 'u856489652_Vitiligo',
      },
    });
  } catch (error: any) {
    console.error('Setup endpoint error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || String(error),
        code: error.code,
        meta: error.meta,
      },
      { status: 500 }
    );
  }
}
