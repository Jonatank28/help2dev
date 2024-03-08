import { motion } from 'framer-motion'
import { ToggleTheme } from '../ToggleTheme'
import { Card, CardContent } from '../ui/card'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ButtonsActions from '@/app/json-formatter/components/ButtonsActions'

const NavBar = () => {
  const pathName = usePathname()

  return (
    <Card className="rounded-none bg-background border-none  shadow-none">
      <CardContent className="p-2 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="font-bold">
            <div className="flex items-center gap-2">
              {/* <img
                src="./logo.png"
                alt="logo help2dev"
                className="bg-transparent"
              /> */}
              <p className="tracking-tighter font-bold text-lg">Help2dev</p>
            </div>
          </Link>
        </motion.h1>
        <div className="flex items-center gap-2">
          {pathName === '/json-formatter' && <ButtonsActions />}
          <ToggleTheme />
        </div>
      </CardContent>
    </Card>
  )
}

export default NavBar
