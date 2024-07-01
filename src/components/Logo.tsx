import logo from "@/assets/help2dev-logo.svg"
import logoDark from "@/assets/help2dev-logo-blackvariant.svg"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

const Logo = () => {
  return (
    <Button
      variant="ghost"
      className="hover:bg-transparent dark:hover:bg-transparent p-0"
    >
      <Link href="/" >
        <Image
          src={logoDark}
          alt="logo"
          width={100}
          height={100}
          className="transition-all block dark:hidden"
        />
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="transition-all hidden dark:block"
        />
      </Link>
    </Button>
  )
}

export default Logo
