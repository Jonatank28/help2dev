'use client'
import { ToggleTheme } from '../ToggleTheme'
import { Card, CardContent } from '../ui/card'
import { usePathname } from 'next/navigation'
import ButtonsActions from '@/app/json-formatter/components/ButtonsActions'
import Logo from './Logo'

const NavBar = () => {
  const pathName = usePathname()

  return (
    <Card className="rounded-none bg-background border-none  shadow-none">
      <CardContent className="p-2 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-2">
          {pathName === '/json-formatter' && <ButtonsActions />}
          <ToggleTheme />
        </div>
      </CardContent>
    </Card>
  )
}

export default NavBar
