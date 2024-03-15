'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { api } from '@/lib/api'
import Link from 'next/link'
import AceEditor from 'react-ace'
import findAll from '../data/findAllExample.json'
import findOne from '../data/findOneExample.json'
import 'ace-builds/src-noconflict/theme-dracula'
import 'ace-builds/src-noconflict/mode-json'
import { useEffect, useState } from 'react'
import { AbstractIntlMessages, useMessages } from 'next-intl'
import { LuCopy } from 'react-icons/lu'
import { FaCheck } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

const Content = () => {
  const [client, setClient] = useState(false)
  const messages = useMessages()
  const generateAPIsMessages: AbstractIntlMessages | any =
    messages['apis']
  const { movies } = generateAPIsMessages
  const [copy, setCopy] = useState({
    status: false,
    link: '',
  })


  // copy to clipboard
  const handleCopy = (link: string) => {
    navigator.clipboard.writeText(link)
    setCopy({
      status: true,
      link: link,
    })
    setTimeout(() => setCopy({ status: false, link: '' }), 2000)
  }

  useEffect(() => {
    setClient(true)
  }, [])

  return (
    <main className="md:mx-2">
      <div className="w-[min(1200px,95vw)] mx-auto">
        <div>
          <h1 className="text-3xl font-bold mb-4">{movies['title']}</h1>
          <p className="mb-6 text-sm opacity-70">{movies['descriptionTitle']}</p>
          <div className='space-y-4 mb-8'>
            <Card>
              <CardHeader className="p-2"><h1 className='text-xl font-bold text-center'>{movies['titlec1']}</h1></CardHeader>
              <CardContent className="p-0 text-sm">
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[150px_1fr] border-t p-2">
                  <p>{movies['method']}</p>
                  <p>GET</p>
                </div>
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[150px_1fr] border-t p-2 items-center">
                  <p>URL</p>
                  <div className='flex items-center gap-3 md:gap-4'>
                    <Link
                      className="text-blue-500 underline text-xs md:text-base"
                      href={`${api}movies/findAll`}
                      target="_blank"
                    >
                      {`${api}movies/findAll`}
                    </Link>
                    <Button variant="outline" size="icon" onClick={() => handleCopy(`${api}movies/findAll`)}>
                      {copy.status && copy.link === `${api}movies/findAll` ? (
                        <FaCheck className="z-10 text-green-600" />
                      ) : (
                        <LuCopy className="z-10 active:animate-out" />
                      )}
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[150px_1fr] border-t p-2">
                  <p>{movies['description']}:</p>
                  <p>{movies['descriptionc1']}</p>
                </div>
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[150px_1fr] border-t p-2 h-[320px] md:h-[310px]">
                  <p>{movies['return']}</p>
                  {client && (
                    <Card className="p-2 bg-[#282A36]">
                      <AceEditor
                        style={{ borderRadius: '8px' }}
                        mode="json"
                        theme='dracula'
                        value={JSON.stringify(findAll, null, 2)}
                        name="rightEditor"
                        className="!h-full !w-full"
                        fontSize={14}
                        tabSize={2}
                        showPrintMargin={false}
                        enableBasicAutocompletion={false}
                        enableLiveAutocompletion={false}
                        showGutter={false}
                        highlightActiveLine={false}
                        readOnly={true}
                        wrapEnabled={true}
                        editorProps={{ $blockScrolling: Infinity }}
                      />
                    </Card>
                  )}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="p-2"><h1 className='text-xl font-bold text-center'>{movies['titlec2']}</h1></CardHeader>
              <CardContent className="p-0 text-sm">
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[150px_1fr] border-t p-2">
                  <p>{movies['method']}</p>
                  <p>GET</p>
                </div>
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[150px_1fr] border-t p-2 items-center">
                  <p>URL</p>
                  <div className='flex items-center gap-3 md:gap-4'>
                    <Link
                      className="text-blue-500 underline text-xs md:text-base"
                      href={`${api}movies/1/findOne`}
                      target="_blank"
                    >
                      {`${api}movies/{id}findOne`}
                    </Link>
                    <Button variant="outline" size="icon" onClick={() => handleCopy(`${api}movies/{id}findOne`)}>
                      {copy.status && copy.link === `${api}movies/{id}findOne` ? (
                        <FaCheck className="z-10 text-green-600" />
                      ) : (
                        <LuCopy className="z-10 active:animate-out" />
                      )}
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[150px_1fr]  border-t p-2">
                  <p>{movies['description']}</p>
                  <p>{movies['descriptionc2']}</p>
                </div>
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[150px_1fr]  border-t p-2 h-[155px] md:h-[155px]">
                  <p>{movies['return']}</p>
                  {client && (
                    <Card className="p-2 bg-[#282A36]">
                      <AceEditor
                        style={{ borderRadius: '8px' }}
                        mode="json"
                        theme='dracula'
                        value={JSON.stringify(findOne, null, 2)}
                        name="rightEditor"
                        className="!h-full !w-full"
                        fontSize={14}
                        tabSize={2}
                        showPrintMargin={false}
                        enableBasicAutocompletion={false}
                        enableLiveAutocompletion={false}
                        showGutter={false}
                        highlightActiveLine={false}
                        readOnly={true}
                        wrapEnabled={true}
                        editorProps={{ $blockScrolling: Infinity }}
                      />
                    </Card>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Content
