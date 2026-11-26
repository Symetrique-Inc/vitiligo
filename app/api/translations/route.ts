import { NextRequest, NextResponse } from 'next/server';
import { TranslationService } from '@/lib/translationService';

export const dynamic = 'force-dynamic';



export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';
    const isPreview = searchParams.get('preview') === 'true';

    let result;
    if (isPreview) {
      result = await TranslationService.getDraftTranslations(locale);
    } else {
      result = await TranslationService.getPublishedTranslations(locale);
    }

    return NextResponse.json({
      locale,
      isPreview,
      translations: result.byText,
      vthMap: result.byKey,
    });
  } catch (error: any) {
    console.error('Translation API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch translations', details: error.message },
      { status: 500 }
    );
  }
}

