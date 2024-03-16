'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import NavBar from './NavBar'
import { EditorProvider } from '@/context/editorContext'
import { Toaster } from '@/components/ui/sonner'
import FeedBack from './FeedBack'
import Script from 'next/script'
import Footer from './Footer'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
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


      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <EditorProvider>
          <Toaster />
          <FeedBack />
          <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
            <NavBar />
            {children}
            <Footer />
          </div>
        </EditorProvider>
      </NextThemesProvider>
    </>
  )
}

export default Providers
