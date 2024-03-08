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
    const getStorage = localStorage.getItem('@help2dev')
    if (defaultThemes.includes(value)) {
      let temp
      // Parse the stored data into an object (assuming it's JSON-formatted)
      try {
        temp = JSON.parse(getStorage || '{}') || {} // Handle potential parsing errors
        if (theme === 'dark') {
          // localStorage.setItem('@themeDarkEditor', value)

          // Update the theme property within the parsed object
          temp.theme = {
            ...temp.theme, // Spread existing theme properties (if any)
            dark: value, // Add the new 'dark' property with the desired value
          }
          localStorage.setItem('@help2dev', JSON.stringify(temp))
        } else {
          temp.theme = {
            ...temp.theme, // Spread existing theme properties (if any)
            light: value, // Add the new 'dark' property with the desired value
          }
        }
        localStorage
        setThemeSelected(value)
      } catch (error) {
        console.error('Error parsing localStorage data:', error)
        temp = {}
      }
    }
  }

  useEffect(() => {
    const getStorage =
      JSON.parse(localStorage.getItem('@help2dev') || '{}') || {}
    const defaltTheme = getStorage.theme
      ? getStorage.theme[theme as string] ?? null
      : null
    if (!defaltTheme) {
      setThemeSelected(theme === 'dark' ? 'dracula' : 'chrome')
    } else {
      setThemeSelected(defaltTheme)
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
