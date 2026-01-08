// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n-config';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // ✅ Skip API routes, static files, and Next.js internals
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/static') ||
        pathname.includes('.') // Files with extensions
    ) {
        return NextResponse.next();
    }

    // ✅ Check if pathname is root
    if (pathname === '/') {
        const url = new URL(`/${i18n.defaultLocale}/`, request.url);
        return NextResponse.redirect(url);
    }

    // ✅ Check if pathname already has a locale
    const pathnameHasLocale = i18n.locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    // ✅ If no locale, redirect to default locale
    if (!pathnameHasLocale) {
        const url = new URL(`/${i18n.defaultLocale}${pathname}`, request.url);
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder files
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
    ],
};