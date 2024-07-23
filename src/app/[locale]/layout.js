import {NextIntlClientProvider} from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';
import "./globals.css";
import { locales } from '@/config';

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const metadata = {
  title: "Activus",
  description: "Activus",
};

export default async function LocaleLayout({
  children,
  params: {locale}
}) {
  
  unstable_setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body className=" font-matter ">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}