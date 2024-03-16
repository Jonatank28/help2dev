'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { usePathname, useRouter } from '@/navigation'
import { useLocale } from 'next-intl'
import Image from 'next/image'
//Photos
import pt from '@/assets/language/pt.png'
import es from '@/assets/language/es.png'
import en from '@/assets/language/en.png'

const LanguageToggler = () => {
  const pathName = usePathname()
  const locale = useLocale()
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="opacity-70 cursor-pointer bg-transparent border border-background-foreground hover:bg-secondary transition-colors p-1 px-2 rounded-md">
        <Image
          src={
            locale === 'pt'
              ? pt
              : locale === 'es'
                ? es
                : en
          }
          alt="logo language selection"
          aria-label='Change language'
          width={26}
          height={26}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => router.push(pathName, { locale: 'pt' })}
        >
          BR
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => router.push(pathName, { locale: 'en' })}
        >
          EN
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => router.push(pathName, { locale: 'es' })}
        >
          ES
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageToggler
