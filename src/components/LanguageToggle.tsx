
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import Image from "next/image"
import pt from "@/assets/language/pt.png"
import en from "@/assets/language/en.png"
import es from "@/assets/language/es.png"
import { useEffect, useState } from "react"
import { Skeleton } from "./ui/skeleton"

const LanguageToggle = () => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true)
  }, [setClient])
  if (!client) return (
    <Skeleton className="w-[48px] h-[36px]" />
  )
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary" className="p-3">
          <Image src={pt} alt="pt" width={24} height={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <div className="flex items-center gap-2">
            <Image src={pt} alt="pt" width={24} height={24} />
            <span>PT</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center gap-2">
            <Image src={en} alt="en" width={24} height={24} />
            <span>EN</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center gap-2">
            <Image src={es} alt="es" width={24} height={24} />
            <span>ES</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageToggle
