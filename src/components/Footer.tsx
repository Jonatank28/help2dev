'use client'

import { Languages } from "lucide-react"
import Link from "next/link"
import { usePathname } from '@/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import pt from '@/assets/language/pt.png'
import en from '@/assets/language/en.png'
import Image from "next/image"

const links = [
  {
    name: 'Blog',
    href: '/blog',
    blank: false
  },
  {
    name: 'Github',
    href: 'https://github.com/Jonatank28',
    blank: true
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/jonatan-s-almeida-4b817b226/',
    blank: true
  },
]

const Footer = () => {
  const pathname = usePathname()

  function onSelectChange(value: string) {
    const newUrl = `/${value}/${pathname}`
    window.location.href = newUrl;
  }


  if (pathname === "/json-formatter") return null
  return (
    <div className="defaultWidth py-5 border-t">
      <footer className="flex flex-col md:flex-row gap-1 justify-between items-center">
        <nav className="flex gap-4 sm:gap-6 order-2 sm:order-1">
          <p className="text-xs">
            © {new Date().getFullYear()}{' '}
            <Link href="/" className="font-bold text-sm" >Help2dev</Link>{' '}
            - Todos os direitos reservados
          </p>
        </nav>

        <div className="flex items-center gap-4 sm:gap-6 order-1 sm:order-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="p-2">
                <Languages size={18} className="opacity-70 dark:opacity-100" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="cursor-pointer" onClick={() => onSelectChange('en')}>
                <div className="flex items-center gap-2">
                  <Image src={en} alt="en" width={24} height={24} />
                  <span>EN</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={() => onSelectChange('pt')}>
                <div className="flex items-center gap-2">
                  <Image src={pt} alt="pt" width={24} height={24} />
                  <span>PT</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target={link.blank ? '_blank' : ''}
              className="text-xs hover:underline underline-offset-4 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default Footer
