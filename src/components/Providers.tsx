'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes"
import ThemeToggle from "./ThemeToggle"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={false}
    >
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
      {children}
    </NextThemesProvider >
  )
}

export default Providers
