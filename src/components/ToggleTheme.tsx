'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ToggleTheme() {
  const { setTheme, theme } = useTheme()
  const [client, setClient] = useState(false)

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  useEffect(() => {
    if (theme) return setClient(true)
  }, [theme])

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} aria-label='ToggleTheme'>
      {client && theme == 'light' ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
    </Button>
  )
}
