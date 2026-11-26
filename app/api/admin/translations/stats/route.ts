import { NextRequest, NextResponse } from 'next/server';
import { TranslationService } from '@/lib/translationService';
import { getAdminUserFromRequest } from '@/lib/auth';

export const dynamic = 'force-dynamic';



export async function GET(request: NextRequest) {
  try {
    const user = await getAdminUserFromRequest(request);
    // Allow reading stats for dashboard
    const stats = await TranslationService.getStats();
    return NextResponse.json(stats);
  } catch (error: any) {
    console.error('Stats error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

