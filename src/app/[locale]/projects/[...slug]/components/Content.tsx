import React from 'react'
import CustomCarousel from './Carousel'
import { Badge } from '@/components/ui/badge'
import { StaticImageData } from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'

interface Props {
  data: {
    id: number
    title: string
    titlePath: string
    description: {
      [key: string]: string
    }
    links: { github: string, build: string }
    images: StaticImageData[]
    tecs: string[]
  }
}

const Content = async ({ data }: Props) => {
  const locale = await getLocale()

  return (
    <section className="widthDefault">
      <h1 className="text-3xl pt-8">{data.title}</h1>
      <p className='text-sm opacity-80 pt-2'>{data.description[locale]}</p>
      <div className='h-auto md:h-[calc(100vh-225px)] w-full grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 md:pt-14'>
        <CustomCarousel data={data} />
        <div className='space-y-8'>
          <div className='space-y-2'>
            <h1 className='text-xl font-medium'>{
              locale === 'en' ? 'Main technologies used' : locale === 'es' ? 'Tecnologías utilizadas' : 'Tecnologías utilizadas'
            }</h1>
            <div className='flex flex-wrap gap-2'>
              {data.tecs.map((tec, index) => (
                <Badge variant='secondary' key={index}>{tec}</Badge>
              ))}
            </div>
          </div>
          <div className='space-y-2'>
            <h1 className='text-xl font-medium'>Links</h1>
            <div className='flex gap-2 pb-4'>
              <Button variant='secondary'><Link href={data.links.github} target='_blank'>Github</Link></Button>
              <Button variant='secondary'><Link href={data.links.build} target='_blank'>Build</Link></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content
