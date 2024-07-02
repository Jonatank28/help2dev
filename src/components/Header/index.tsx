import Logo from "../Logo"
import ThemeToggle from "../ThemeToggle"
import { Card, CardContent } from "../ui/card"
import ButtonsJsonFormatter from "./ButtonsJsonFormatter"

const Header = () => {
  return (
    <Card className="rounded-none border-none shadow-xl">
      <CardContent className="flex items-center justify-between p-2">
        <Logo />
        <div className="flex items-center gap-2">
          <ButtonsJsonFormatter />
          <ThemeToggle />
        </div>
      </CardContent>
    </Card>
  )
}

export default Header
