import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
const COOKIE_NAME = 'onevitiligo_admin_session';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get(COOKIE_NAME);

  // Protected Admin Routes
  if (pathname.startsWith('/admin/translations')) {
    if (!sessionCookie?.value) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // If already logged in, redirect /admin/login to /admin/translations
  if (pathname === '/admin/login' && sessionCookie?.value) {
    return NextResponse.redirect(new URL('/admin/translations', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};

