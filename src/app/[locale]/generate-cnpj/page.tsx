import React from 'react'
import Content from './components/Content'
import Script from 'next/script'

export const metadata = {
  title: 'Generate CNPJ',
  description: 'Generate a valid and random CNPJ',
}

const PageGenerateCNPJ = () => {
  return (
    <main className="h-[calc(100vh-52px)] flex justify-center items-center">
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6708395486232861" crossOrigin="anonymous"></Script>
      <Content />
    </main>
  )
}

export default PageGenerateCNPJ
