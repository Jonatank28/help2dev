'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import NavBar from './NavBar'
import { EditorProvider } from '@/context/editorContext'
import { Toaster } from '@/components/ui/sonner'
import FeedBack from './FeedBack'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <EditorProvider>
        <Toaster />
        <FeedBack />
        <NavBar />
        {children}
      </EditorProvider>
    </NextThemesProvider>
  )
}

export default Providers
