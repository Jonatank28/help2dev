'use client'

import { useRouter } from 'next/navigation'
import { Card, CardContent } from '../ui/card'

interface Props {
  service: {
    id: number
    name: string
    description: string
    href: string
  }
}

const ServiceCard = ({ service }: Props) => {
  const router = useRouter()

  return (
    <Card
      key={service.name}
      className="p-12 hover:bg-secondary transition-colors cursor-pointer"
      onClick={() => router.push(service.href)}
    >
      <CardContent className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tighter">
            {service.name}
          </h1>
          <p className="text-gray-500 text-xs/relaxed dark:text-gray-400">
            {service.description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceCard
