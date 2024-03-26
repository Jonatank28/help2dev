'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Image, { StaticImageData } from 'next/image'
import { useTheme } from 'next-themes'

interface Props {
  data: {
    images: StaticImageData[]
    tecs: string[]
  }
}


const Carousel = ({ data }: Props) => {
  const { theme } = useTheme()

  return (
    <div className='relative'>
      <Swiper
        style={{
          //@ts-ignore
          '--swiper-pagination-color': theme === 'dark' ? '#fff' : '#000',
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        loop={true}
        height={200}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {
          data.images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image src={image} alt={`Image ${index}`} width={1080} height={1080} className='object-cover bg-cover' />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Carousel