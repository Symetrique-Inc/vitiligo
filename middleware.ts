import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
const COOKIE_NAME = 'onevitiligo_admin_session';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get(COOKIE_NAME);
  const authHeader = request.headers.get('authorization');
  const hasToken = Boolean(sessionCookie?.value || (authHeader && authHeader.startsWith('Bearer ')));

  // 1. Protected Admin Pages: /admin/:path* (excluding /admin/login)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    if (!hasToken) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 2. Protected Admin API Routes: /api/admin/:path* (excluding /api/admin/auth/login)
  if (pathname.startsWith('/api/admin') && pathname !== '/api/admin/auth/login') {
    if (!hasToken) {
      return NextResponse.json(
        { error: 'Unauthorized: Admin authentication required' },
        { status: 401 }
      );
    }
  }

  // 3. If already logged in, redirect /admin/login to /admin/translations
  if (pathname === '/admin/login' && hasToken) {
    return NextResponse.redirect(new URL('/admin/translations', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};

