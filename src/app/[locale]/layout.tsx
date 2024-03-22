import Providers from '@/components/Providers'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'
import { NextIntlClientProvider, useMessages } from 'next-intl'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})


export const metadata = {

  title: {
    default: 'Help2Dev',
    template: 'Help2Dev | %s',
  },
  description: 'Help2Dev, json formatter, free api.',
  url: 'https://help2dev.com',
  siteName: 'Help2Dev',
  viewport: 'width=device-width, initial-scale=1',
  creator: 'Jonatan dos Santos de Almeida',
  AudioContext: 'Help2Dev, json formatter.',
  HTMLHeadingElement: 'Help2Dev, json formatter, free api.',
  keywords: ['CNPJ', 'CPF', 'API', 'APIREST', 'JSON', 'HELP', 'DEV', 'JASON', 'EDITOR', 'GET', 'HELP2DEV', 'Help2Dev'],
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
      <head>
        <meta name="google-site-verification" content="BRHtJ_L3WjGrv787YLoa7pYMiksXMx3rJHbosbBJwis" />

      </head>
      {/* <Head> 
     <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6708395486232861" crossOrigin="anonymous"></Script>
     <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WMJRWD34KG"></Script>
     <script
       dangerouslySetInnerHTML={{
         __html: `
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
 
     gtag('config', 'G-WMJRWD34KG');
   `,
       }}
     ></script>


     <script>  window.dataLayer = window.dataLayer </script>
      </Head>  */}
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


