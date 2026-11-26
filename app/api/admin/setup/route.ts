import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { ensureDatabaseInitialized } from '@/lib/dbInit';

export async function GET() {
  try {
    await ensureDatabaseInitialized();

    const adminCount = await prisma.adminUser.count();
    const languageCount = await prisma.supportedLanguage.count();
    const keyCount = await prisma.translationKey.count();
    const translationCount = await prisma.translation.count();

    return NextResponse.json({
      success: true,
      message: 'Database schema and Super Admin initialized successfully',
      stats: {
        adminCount,
        languageCount,
        keyCount,
        translationCount,
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
