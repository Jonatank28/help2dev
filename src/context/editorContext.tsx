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

// Custom Hook for Local Storage
function useLocalStorage(key: string, defaultValue: any) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : defaultValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
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

  const [themeStorage, setThemeStorage] = useLocalStorage('@help2dev', {
    theme: {},
  })

  const onChangeThemeEditor = (value: string) => {
    if (defaultThemes.includes(value)) {
      setThemeStorage((prev: any) => ({
        ...prev,
        theme: {
          ...prev.theme,
          [theme as string]: value,
        },
      }))
      setThemeSelected(value)
    }
  }

  useEffect(() => {
    const storedTheme = themeStorage.theme[theme as string] ?? null
    if (!storedTheme) {
      setThemeSelected(theme === 'dark' ? 'dracula' : 'chrome')
    } else {
      setThemeSelected(storedTheme)
    }
  }, [theme, themeStorage])

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
