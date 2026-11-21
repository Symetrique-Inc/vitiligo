import { NextRequest, NextResponse } from 'next/server';
import { getAdminUserFromRequest } from '@/lib/auth';



export async function GET(request: NextRequest) {
  const user = await getAdminUserFromRequest(request);
  if (!user) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
  return NextResponse.json({ authenticated: true, user });
}

