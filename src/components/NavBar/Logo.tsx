import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/help2dev-logo.svg'
import logoBlack from '@/assets/help2dev-logo-blackvariant.svg'
import { useEffect, useState } from 'react'


const Logo = () => {
  const { theme } = useTheme()
  const [client, setClient] = useState(false)

  useEffect(() => {
    if (theme) return setClient(true)
  }, [theme])

  return (
    client ? (
      <Link href="/">
        <Image
          src={
            theme === 'dark'
              ? logo
              : logoBlack
          }
          alt="logo"
          width={120}
          height={120}
        />
      </Link>
    ) : (
      <div></div>
    )
  )
}

export default Logo
