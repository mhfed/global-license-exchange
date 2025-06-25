import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['vi', 'en'],

  // Used when no locale matches
  defaultLocale: 'vi',

  // Always use locale prefix, even for default locale
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  // Exclude API routes, Next.js internals and files with extensions
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 