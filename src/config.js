
// export const locales = ['en', 'fr'];


import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'en';
export const locales = ['en', 'fr', 'es', 'de', 'it', 'cn', 'br', 'ru'];

export const pathnames = {
  '/': '/',
};

export const localePrefix = 'always';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;