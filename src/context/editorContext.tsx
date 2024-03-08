import React, { createContext, useContext, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { aceLightThemes, aceDarkThemes } from '../data/themes'
import { usePathname } from 'next/navigation'

interface ThemeContextType {
  themeSelected: string
  setThemeSelected: (value: string) => void
  onChangeThemeEditor: (value: string) => void
  jsonInput: string
  setJsonInput: (value: string) => void
  formattedJson: string
  setFormattedJson: (value: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme()
  const pathName = usePathname()
  const defaultThemes = theme === 'dark' ? aceDarkThemes : aceLightThemes
  const [themeSelected, setThemeSelected] = useState<string>(
    theme === 'dark' ? 'dracula' : 'chrome'
  )
  const [jsonInput, setJsonInput] = useState('')
  const [formattedJson, setFormattedJson] = useState('')

  const onChangeThemeEditor = (value: string) => {
    if (defaultThemes.includes(value)) {
      if (theme === 'dark') {
        localStorage.setItem('@themeDarkEditor', value)
      } else {
        localStorage.setItem('@themeLightEditor', value)
      }
      setThemeSelected(value)
    }
  }

  useEffect(() => {
    if (theme === 'dark') {
      setThemeSelected(localStorage.getItem('@themeDarkEditor') || 'dracula')
    } else {
      setThemeSelected(localStorage.getItem('@themeLightEditor') || 'chrome')
    }
  }, [theme])

  useEffect(() => {
    if (pathName !== '/json-formatter') {
      setJsonInput('')
    }
  }, [pathName])

  const values: ThemeContextType = {
    themeSelected,
    setThemeSelected,
    onChangeThemeEditor,
    jsonInput,
    setJsonInput,
    formattedJson,
    setFormattedJson,
  }

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}

const useEditor = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useEditor must be used within a EditorProvider')
  }
  return context
}

export { EditorProvider, useEditor }
