// middleware.ts - NEW FILE
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n-config';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Check if pathname is root
    if (pathname === '/') {
        return NextResponse.redirect(new URL(`/${i18n.defaultLocale}/`, request.url));
    }

    // Check if pathname is missing locale
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
        return NextResponse.redirect(
            new URL(`/${i18n.defaultLocale}${pathname}`, request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        // Skip all internal paths (_next, api, etc)
        '/((?!_next|api|favicon.ico|.*\\..*|images|logo.png|rsz_2logo.png|protection).*)',
    ],
};