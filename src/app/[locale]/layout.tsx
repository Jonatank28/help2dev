import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  unstable_setRequestLocale
} from 'next-intl/server';
import { ReactNode } from 'react';
import { locales } from '@/config';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {

  title: {
    default: 'Help2Dev',
    template: 'Help2Dev | %s',
  },
  description: 'Help2Dev, json formatter, free api.',
  url: 'https://help2dev.com',
  siteName: 'Help2Dev',
  creator: 'Jonatan dos Santos de Almeida',
  AudioContext: 'Help2Dev, json formatter.',
  HTMLHeadingElement: 'Help2Dev, json formatter, free api.',
  keywords: ['CNPJ', 'CPF', 'API', 'APIREST', 'JSON', 'HELP', 'DEV', 'JASON', 'EDITOR', 'GET', 'HELP2DEV', 'Help2Dev'],

}

type Props = {
  children: ReactNode;
  params: { locale: string };
};

// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale}>
      <body className={clsx(inter.className, 'flex h-full flex-col')}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}