import { NextRequest, NextResponse } from 'next/server';
import { TranslationService } from '@/lib/translationService';
import { getAdminUserFromRequest } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const user = await getAdminUserFromRequest(request);
    const userName = user?.name || 'Super Admin';

    const body = await request.json();
    const { translationIds } = body;

    if (!Array.isArray(translationIds) || !translationIds.length) {
      return NextResponse.json({ error: 'No translation IDs provided' }, { status: 400 });
    }

    const result = await TranslationService.approveTranslations({
      translationIds,
      user: userName,
    });

    return NextResponse.json({ success: true, count: result.count });
  } catch (error: any) {
    console.error('Approve API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

