'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes"
import Header from "./Header"
import Footer from "./Footer"
import { Toaster } from "./ui/toaster"
import { GoogleAdSense } from "next-google-adsense";
import Script from "next/script"
import { GoogleAnalytics } from "nextjs-google-analytics";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const id = 'G-2E2WYW2QJ7'
  return (
    <>
      {/* Google Analytics Script */}
      <GoogleAnalytics key={id} />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <GoogleAdSense publisherId="pub-6708395486232861" />
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={false}
      >
        <Toaster />
        <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
          <Header />
          {children}
          <Footer />
        </div>
      </NextThemesProvider>
    </>
  )
}

export default Providers
