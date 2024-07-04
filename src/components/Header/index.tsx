import Logo from "../Logo"
import ThemeToggle from "../ThemeToggle"
import ButtonsJsonFormatter from "./ButtonsJsonFormatter"

const Header = () => {
  return (
    <footer className="shadow-lg dark:shadow-white/[0.02]">
      <div className="flex items-center justify-between py-2 defaultWidth">
        <Logo />
        <div className="flex items-center gap-4">
          <ButtonsJsonFormatter />
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Header
