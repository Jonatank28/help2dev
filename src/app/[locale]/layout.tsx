import Providers from '@/components/Providers'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'Help2Dev',
  description: 'Help2Dev',
  icons: {
    icon: '/logo.svg',
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
