import { NextRequest, NextResponse } from 'next/server';
import { TranslationService } from '@/lib/translationService';
import { getAdminUserFromRequest } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const user = await getAdminUserFromRequest(request);
    const userName = user?.name || 'Super Admin';

    const body = await request.json();
    const { translationId } = body;

    if (!translationId) {
      return NextResponse.json({ error: 'translationId is required' }, { status: 400 });
    }

    const result = await TranslationService.revertToPublished(translationId, userName);
    return NextResponse.json({ success: true, translation: result });
  } catch (error: any) {
    console.error('Revert API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

