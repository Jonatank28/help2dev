import { getTranslations } from "next-intl/server"

const Footer = async () => {
  const footer = await getTranslations('Footer')

  return (
    <footer className="border-t">
      <div className="widthDefault flex gap-2 sm:flex-row py-6 w-full shrink-0 items-center ">
        <nav className="flex gap-4 sm:gap-6">
          <p className="text-[10px] md:text-xs">
            © {new Date().getFullYear()}{' '}
            <span className="font-bold text-sm">Help2dev</span>{' '}
            {footer('title')}.
          </p>
        </nav>

        <div className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-[10px] md:text-xs hover:underline underline-offset-4"
            href="https://github.com/Jonatank28"
            target="_blank"
          >
            Github
          </a>
          <a
            className="text-[10px] md:text-xs hover:underline underline-offset-4"
            href="https://www.linkedin.com/in/jonatan-s-almeida-4b817b226/"
            target="_blank"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
