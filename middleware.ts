// middleware.ts - FIXED VERSION
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n-config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for API, static files, and assets
  if (
      pathname.startsWith('/api/') ||
      pathname.startsWith('/_next/') ||
      pathname.startsWith('/static/') ||
      pathname.startsWith('/images/') ||
      pathname.startsWith('/logo.png') ||
      pathname.startsWith('/rsz_2logo.png') ||
      pathname.includes('.') // files with extensions
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a valid locale
  const pathnameHasLocale = i18n.locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // ✅ Redirect root to Russian (default)
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/ru/', request.url));
  }

  // ✅ For paths without locale, redirect to Russian
  return NextResponse.redirect(new URL(`/ru${pathname}`, request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - files with extensions (images, fonts, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|logo.png|rsz_2logo.png|images/|.*\\..*).*)',
  ],
};