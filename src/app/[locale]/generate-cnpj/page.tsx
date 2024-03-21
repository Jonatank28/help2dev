import React from 'react'
import Content from './components/Content'

export const metadata = {
  title: 'Generate CNPJ',
  description: 'Generate a valid and random CNPJ',
}

const PageGenerateCNPJ = () => {
  return (
    <main>
      <div className='h-[calc(100vh-121px)] flex justify-center items-center'>
        <Content />
      </div>
    </main>
  )
}

export default PageGenerateCNPJ
