import { NextRequest, NextResponse } from 'next/server';
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
    const { scope = 'ALL', page, languageCode, translationIds } = body;

    const result = await TranslationService.publishTranslations({
      scope,
      page,
      languageCode,
      translationIds,
      user: userName,
    });

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Publish API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

