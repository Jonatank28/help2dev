'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { usePathname, useRouter } from '@/navigation'
import { useLocale } from 'next-intl'

const LanguageToggler = () => {
  const pathName = usePathname()
  const locale = useLocale()
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer bg-transparent border border-background-foreground hover:bg-secondary transition-colors p-1 px-2 rounded-md">
        {locale}
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
          US
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
