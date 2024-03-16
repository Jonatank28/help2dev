import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'pt', 'es'],
  defaultLocale: 'pt',
  localeDetection: true,
  alternateLinks: false
});
 
export const config = {
  matcher: ['/','/(pt|en|es)/:path*']
};
