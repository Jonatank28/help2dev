import Providers from '@/components/Providers'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen font-sans antialiased scroll-smooth',
          fontSans.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
