import { NextRequest, NextResponse } from 'next/server';
import { TranslationService } from '@/lib/translationService';
import { getAdminUserFromRequest } from '@/lib/auth';

export const dynamic = 'force-dynamic';



export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || undefined;
    const section = searchParams.get('section') || undefined;
    const status = searchParams.get('status') || undefined;
    const language = searchParams.get('language') || undefined;
    const search = searchParams.get('search') || undefined;
    const pageIndex = parseInt(searchParams.get('pageIndex') || '0', 10);
    const pageSize = parseInt(searchParams.get('pageSize') || '20', 10);

    const result = await TranslationService.getEditorTranslations({
      page,
      section,
      status,
      language,
      search,
      pageIndex,
      pageSize,
    });

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Editor API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const user = await getAdminUserFromRequest(request);
    const userName = user?.name || 'Super Admin';

    const body = await request.json();

    // Case 1: Batch update for a key
    if (body.keyId && Array.isArray(body.translations)) {
      const result = await TranslationService.updateKeyTranslations({
        keyId: body.keyId,
        translations: body.translations,
        user: userName,
        reason: body.reason,
      });
      return NextResponse.json({ success: true, count: result.length });
    }

    // Case 2: Update individual translation
    if (body.translationId && typeof body.translatedText === 'string') {
      const result = await TranslationService.updateTranslation({
        id: body.translationId,
        translatedText: body.translatedText,
        status: body.status,
        user: userName,
        reason: body.reason,
      });
      return NextResponse.json({ success: true, translation: result });
    }

    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  } catch (error: any) {
    console.error('Editor PUT error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

