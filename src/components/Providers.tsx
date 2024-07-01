'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes"
import ThemeToggle from "./ThemeToggle"
import Header from "./Header"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={false}
    >
      <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
        <Header />
        {children}
      </div>
    </NextThemesProvider >
  )
}

export default Providers
