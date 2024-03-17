import Footer from "@/components/Footer";
import ServicesSection from "@/components/Services";
import { getTranslations } from "next-intl/server";

export default async function Component() {
  const a = await getTranslations('/')
  return (
    <main>
      <div className="space-y-6">
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
        {/* Services */}
        <ServicesSection />
      </div>
    </main>
  )
}
