import { NextRequest, NextResponse } from 'next/server';
import { TranslationService } from '@/lib/translationService';
import { getAdminUserFromRequest } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const user = await getAdminUserFromRequest(request);
    const userName = user?.name || 'Super Admin';

    const body = await request.json();
    const { key, page, section, component, description, sourceText, translations } = body;

    if (!key || !page || !section || !sourceText) {
      return NextResponse.json(
        { error: 'key, page, section, and sourceText are required' },
        { status: 400 }
      );
    }

    const created = await TranslationService.addTranslationKey({
      key: key.trim(),
      page: page.trim().toLowerCase(),
      section: section.trim().toLowerCase(),
      component,
      description,
      sourceText: sourceText.trim(),
      translations,
      user: userName,
    });

    return NextResponse.json({ success: true, key: created });
  } catch (error: any) {
    console.error('Key creation error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const user = await getAdminUserFromRequest(request);
    const userName = user?.name || 'Super Admin';

    const body = await request.json();
    const { id, sourceText, page, section, component, description } = body;

    if (!id || !sourceText) {
      return NextResponse.json({ error: 'id and sourceText are required' }, { status: 400 });
    }

    const updated = await TranslationService.updateKeySource({
      id,
      sourceText: sourceText.trim(),
      page,
      section,
      component,
      description,
      user: userName,
    });

    return NextResponse.json({ success: true, key: updated });
  } catch (error: any) {
    console.error('Key update error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }

    await prisma.translationKey.update({
      where: { id },
      data: { isActive: false },
    });

    TranslationService.invalidateCache();
    return NextResponse.json({ success: true, message: 'Key archived' });
  } catch (error: any) {
    console.error('Key delete error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

