import React from 'react'
import Content from './components/Content'
import Script from 'next/script'

export const metadata = {
  title: 'Apis',
  description: 'Apis',
}

const PageLoremIpsum = () => {
  return (
    <>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6708395486232861"
        crossOrigin="anonymous"></Script>
      <Content />
    </>
  )
}

export default PageLoremIpsum
