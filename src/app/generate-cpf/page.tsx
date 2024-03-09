import React from 'react'
import CardGenerate from './components/CardGenerate'

export const metadata = {
  title: 'Generate CPF',
  description: 'Generate a valid and random CPF',
  icons: {
    icon: '/logo.svg',
  },
}

const PageGenerateCPF = () => {
  return (
    <main className="h-[calc(100vh-52px)] flex justify-center items-center">
      <CardGenerate />
    </main>
  )
}

export default PageGenerateCPF
