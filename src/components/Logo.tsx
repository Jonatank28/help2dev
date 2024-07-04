import logo from "@/assets/help2dev-logo.svg"
import logoDark from "@/assets/help2dev-logo-blackvariant.svg"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" prefetch={true}>
      <Button
        variant="ghost"
        className="hover:bg-transparent dark:hover:bg-transparent"
      >
        <Image
          src={logoDark}
          alt="logo"
          width={110}
          height={110}
          className="transition-all block dark:hidden"
        />
        <Image
          src={logo}
          alt="logo"
          width={110}
          height={110}
          className="transition-all hidden dark:block"
        />
      </Button>
    </Link>
  )
}

export default Logo
