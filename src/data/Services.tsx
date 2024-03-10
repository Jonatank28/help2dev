'use server'

import { getTranslations } from 'next-intl/server'

const Services = async () => {
  const t = await getTranslations('/')
  const key = [
    'JsonFormatter',
    'GenerateCpf',
    'GenerateCnpj',
    'LoremIpsum',
  ] as const

  const data = [
    {
      id: 1,
      // name: 'JSON Formatter',
      name: t(key[0] + '.title'),
      description: t(key[0] + '.description'),
      href: '/json-formatter',
    },
    {
      id: 2,
      name: t(key[1] + '.title'),
      description: t(key[1] + '.description'),
      href: '/generate-cpf',
    },
    {
      id: 3,
      name: t(key[2] + '.title'),
      description: t(key[2] + '.description'),
      href: '/generate-cnpj',
    },
    {
      id: 4,
      name: t(key[3] + '.title'),
      description: t(key[3] + '.description'),
      href: '/lorem-ipsum',
    },
  ]
  return data
}

export default Services
