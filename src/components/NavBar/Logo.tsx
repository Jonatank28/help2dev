import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Logo = () => {
  const { theme } = useTheme()
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [theme])

  return (
    <>
      {client ? (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="font-bold">
            <div className="flex items-center gap-2">
              <Image
                src={
                  theme === 'dark'
                    ? '/help2dev-logo.svg'
                    : '/help2dev-logo-blackvariant.svg'
                }
                alt="logo"
                width={120}
                height={120}
              />
            </div>
          </Link>
        </motion.div>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default Logo
