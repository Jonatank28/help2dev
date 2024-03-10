import { ToggleTheme } from '../ToggleTheme'
import { Card, CardContent } from '../ui/card'
import Logo from './Logo'
import ButtonsActions from '@/app/[locale]/json-formatter/components/ButtonsActions'
import LanguageToggler from '../LanguageToggler'
import { usePathname } from '@/navigation'
import { routesAplication } from '@/routes'

const NavBar = () => {
  const pathName = usePathname()

  if (!routesAplication.includes(pathName)) return null

  return (
    <Card className="rounded-none bg-background border-none shadow-none z-10">
      <CardContent className="p-2 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-2">
          {/* Actions page /json-formatter */}
          <ButtonsActions />
          <LanguageToggler />
          <ToggleTheme />
        </div>
      </CardContent>
    </Card>
  )
}

export default NavBar
