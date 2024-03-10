'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function NotFound() {
  const router = useRouter()
  const pathName = usePathname()

  useEffect(() => {
    let temp = JSON.parse(localStorage.getItem('@help2dev') || '{}') || {}
    const localeCurrent = (temp.locale = temp.locale || 'en')
    localStorage.setItem('@help2dev', JSON.stringify(temp))

    return router.push(`/${localeCurrent}${pathName}`)
  }, [pathName, router])

  return null
}
