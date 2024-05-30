import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from './navigation';
export default createMiddleware({
    locales,
    localePrefix,
    defaultLocale: 'en'
});

export const config = {
    // Match only internationalized pathnames
    // matcher: ['/', '/(ar|en)/:path*']
    matcher: ['/((?!api|_next|.*\\..*).*)']
};