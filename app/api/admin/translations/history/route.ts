import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAdminUserFromRequest } from '@/lib/auth';
import { TranslationService } from '@/lib/translationService';

export const dynamic = 'force-dynamic';



export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const translationId = searchParams.get('translationId');
    const limit = parseInt(searchParams.get('limit') || '50', 10);

    const where: any = {};
    if (translationId) {
      where.translationId = translationId;
    }

    const history = await prisma.translationHistory.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit,
      include: {
        translation: {
          select: {
            languageCode: true,
            translationKey: {
              select: { key: true, page: true, section: true, sourceText: true },
            },
          },
        },
      },
    });

    const publishLogs = await prisma.translationPublishLog.findMany({
      orderBy: { publishedAt: 'desc' },
      take: 20,
    });

    return NextResponse.json({
      history,
      publishLogs,
    });
  } catch (error: any) {
    console.error('History API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Single-click restore historical version
export async function POST(request: NextRequest) {
  try {
    const user = await getAdminUserFromRequest(request);
    const userName = user?.name || 'Super Admin';

    const body = await request.json();
    const { historyId } = body;

    if (!historyId) {
      return NextResponse.json({ error: 'historyId is required' }, { status: 400 });
    }

    const historyRecord = await prisma.translationHistory.findUnique({
      where: { id: historyId },
      include: { translation: true },
    });

    if (!historyRecord) {
      return NextResponse.json({ error: 'History record not found' }, { status: 404 });
    }

    const restored = await prisma.$transaction(async (tx) => {
      await tx.translationHistory.create({
        data: {
          translationId: historyRecord.translationId,
          previousText: historyRecord.translation.translatedText,
          newText: historyRecord.newText,
          previousStatus: historyRecord.translation.status,
          newStatus: 'DRAFT',
          changedBy: userName,
          changeReason: `Restored from version of ${historyRecord.createdAt.toISOString()}`,
        },
      });

      return tx.translation.update({
        where: { id: historyRecord.translationId },
        data: {
          translatedText: historyRecord.newText,
          status: 'DRAFT',
          version: { increment: 1 },
          updatedBy: userName,
        },
      });
    });

    TranslationService.invalidateCache();

    return NextResponse.json({ success: true, translation: restored });
  } catch (error: any) {
    console.error('Restore error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

