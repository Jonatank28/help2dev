import React from 'react'
import CardGenerate from './components/CardGenerate'

export const metadata = {
  title: 'Generate CNPJ',
  description: 'Generate a valid and random CNPJ',
  icons: {
    icon: '/logo.svg',
  },
}

const PageGenerateCNPJ = () => {
  return (
    <main className="h-[calc(100vh-52px)] flex justify-center items-center">
      <CardGenerate />
    </main>
  )
}

export default PageGenerateCNPJ
