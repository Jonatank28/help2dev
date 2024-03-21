import Services from '@/constants/Services'
import ServiceCard from '@/ServiceCard'
import { getTranslations } from 'next-intl/server'


const ServicesSection = async () => {
  const services = await Services()
  const a = await getTranslations('/')

  return (
    <section className="w-full py-6 lg:py-12 border-t">
      <div className="widthDefault grid items-center gap-6 lg:gap-12">
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
  )
}

export default ServicesSection
