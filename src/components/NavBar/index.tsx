'use client'
import { ToggleTheme } from '../ToggleTheme'
import { Card, CardContent } from '../ui/card'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import ButtonsActions from '@/app/[lang]/json-formatter/components/ButtonsActions'
import { useLocale } from 'next-intl'

const NavBar = () => {
  const pathName = usePathname()
  const locale = useLocale()
  return (
    <Card className="rounded-none bg-background border-none  shadow-none">
      <CardContent className="p-2 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-2">
          {pathName === `/${locale}/json-formatter` && <ButtonsActions />}
          <ToggleTheme />
        </div>
      </CardContent>
    </Card>
  )
}

export default NavBar
