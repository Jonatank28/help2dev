'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  const pathName = usePathname()

  let temp = JSON.parse(localStorage.getItem('@help2dev') || '{}') || {}
  const localeCurrent = (temp.locale = temp.locale || 'en')
  localStorage.setItem('@help2dev', JSON.stringify(temp))

  return router.push(`/${localeCurrent}${pathName}`)
}
