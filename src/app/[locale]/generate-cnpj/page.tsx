import React from 'react'
import Content from './components/Content'

export const metadata = {
  title: 'Generate CNPJ',
  description: 'Generate a valid and random CNPJ',
}

const PageGenerateCNPJ = () => {
  return (
    <main className="h-[calc(100vh-52px)] flex justify-center items-center">
      <Content />
    </main>
  )
}

export default PageGenerateCNPJ
