'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes"
import Header from "./Header"
import Footer from "./Footer"
import { Toaster } from "./ui/toaster"
import { GoogleAdSense } from "next-google-adsense";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
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
