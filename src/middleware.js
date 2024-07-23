import createMiddleware from 'next-intl/middleware';
import {localePrefix, defaultLocale, locales, pathnames} from './config';

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(fr|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};


/*



import createMiddleware from 'next-intl/middleware';
 

import {locales} from './config';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*']
};
*/