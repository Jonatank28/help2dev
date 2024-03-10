import Services from '@/data/Services'
import ServiceCard from '@/components/home/ServiceCard'
import { getTranslations } from 'next-intl/server'

export default async function Component() {
  const services = await Services()
  const a = await getTranslations('/')
  const footer = await getTranslations('Footer')

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-8 lg:py-16">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                {a('title')}
              </h1>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                {a('title_description')}
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-8 lg:py-12 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6  lg:gap-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {a('subtitle')}
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {a('subtitle_description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12">
                {services &&
                  services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
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
      </footer>
    </div>
  )
}
