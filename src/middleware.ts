import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'pt', 'es'],
  defaultLocale: 'en',
  localeDetection: true,
});
 
export const config = {
  matcher: ['/','/(pt|en|es)/:path*', '/unknown.txt']
};
