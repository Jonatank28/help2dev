'use client'

import { AbstractIntlMessages, useMessages } from "next-intl"
import Link from "next/link"

const Footer = () => {
  const messages = useMessages()
  const footer: AbstractIntlMessages | any =
    messages['Footer']

  return (
    <footer className="border-t">
      <div className="widthDefault flex gap-2 sm:flex-row py-6 w-full shrink-0 items-center ">
        <nav className="flex gap-4 sm:gap-6">
          <p className="text-[10px] md:text-xs">
            © {new Date().getFullYear()}{' '}
            <Link href="/" className="font-bold text-sm" >Help2dev</Link>{' '}
            {footer['title']}.
          </p>
        </nav>

        <div className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-[10px] md:text-xs hover:underline underline-offset-4"
            href="https://github.com/Jonatank28"
            target="_blank"
          >
            Github
          </Link>
          <Link
            className="text-[10px] md:text-xs hover:underline underline-offset-4"
            href="https://www.linkedin.com/in/jonatan-s-almeida-4b817b226/"
            target="_blank"
          >
            Linkedin
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
