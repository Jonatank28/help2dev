import Providers from '@/components/Providers'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import Head from 'next/head'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'Help2Dev',
  description: 'Help2Dev',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()
  return (
    <html lang={locale} suppressHydrationWarning>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6708395486232861" crossOrigin="anonymous"></script>
      </Head>
      <body
        className={cn(
          'min-h-screen font-sans antialiased scroll-smooth',
          fontSans.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
