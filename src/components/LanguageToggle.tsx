import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import pt from "@/assets/language/pt.png";
import en from "@/assets/language/en.png";
import es from "@/assets/language/es.png";
import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname } from "@/navigation";

const languages = [
  { code: 'en', label: 'EN', icon: en },
  { code: 'pt', label: 'PT', icon: pt },
  { code: 'es', label: 'ES', icon: es },
];

const LanguageToggle = () => {
  const locale = useLocale();
  const pathname = usePathname();

  function onSelectChange(value: string) {
    if (value === locale) return
    const newUrl = `/${value}/${pathname}`;
    window.location.href = newUrl;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="p-2 flex items-center gap-1">
          <Languages size={18} className="opacity-70 dark:opacity-100" />
          <span className="uppercase text-xs">{locale}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} className="cursor-pointer" onClick={() => onSelectChange(lang.code)}>
            <div className="flex items-center gap-2">
              <Image src={lang.icon} alt={lang.code} width={24} height={24} />
              <span>{lang.label}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
