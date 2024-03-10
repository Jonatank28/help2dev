import React, { createContext, useContext, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { aceLightThemes, aceDarkThemes } from '../data/themes'
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'

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
  const locale = useLocale()
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
      let temp = JSON.parse(localStorage.getItem('@help2dev') || '{}') || {}
      // Garante que jsonFormatter e theme existam antes de tentar acessá-los
      temp.jsonFormatter = temp.jsonFormatter || {}
      temp.jsonFormatter.theme = temp.jsonFormatter.theme || {}
      temp.jsonFormatter.theme[theme === 'dark' ? 'dark' : 'light'] = value
      localStorage.setItem('@help2dev', JSON.stringify(temp))
      setThemeSelected(value)
    }
  }

  useEffect(() => {
    const getStorage =
      JSON.parse(localStorage.getItem('@help2dev') || '{}') || {}
    const defaultTheme =
      getStorage.jsonFormatter?.theme?.[theme === 'dark' ? 'dark' : 'light'] ??
      null
    if (!defaultTheme) {
      setThemeSelected(theme === 'dark' ? 'dracula' : 'chrome')
    } else {
      setThemeSelected(defaultTheme)
    }
  }, [theme])

  useEffect(() => {
    if (pathName !== '/json-formatter') {
      setJsonInput('')
    }
  }, [pathName])

  useEffect(() => {
    const getStorage =
      JSON.parse(localStorage.getItem('@help2dev') || '{}') || {}
    const localeCurrent = getStorage.locale || 'en'
    if (locale !== localeCurrent) {
      let temp = JSON.parse(localStorage.getItem('@help2dev') || '{}') || {}
      temp.locale = locale
      localStorage.setItem('@help2dev', JSON.stringify(temp))
    }
  }, [locale])

  const getData = async () => {
    try {
      const response = await fetch('/api/hello')
      const res = await response.json()
      console.log('🚀 ~ getData ~ res', res)
    } catch (error: any) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

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
