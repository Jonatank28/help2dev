const Services = () => {
  const data = [
    {
      id: 1,
      name: 'JSON Formatter',
      description: 'Format your JSON data into a more readable format.',
      href: '/json-formatter',
    },
    {
      id: 2,
      name: 'CPF Generator',
      description: 'Generate a valid and random CPF.',
      href: '/generate-cpf',
    },
    {
      id: 3,
      name: 'CNPJ Generator',
      description: 'Generate a valid and random CNPJ.',
      href: '/generate-cnpj',
    },
  ]
  return data
}

export default Services
