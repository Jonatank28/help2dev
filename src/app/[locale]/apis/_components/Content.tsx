'use client'

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import AceEditor from 'react-ace'
import findAll from '@/data/findAllExample.json'
import 'ace-builds/src-noconflict/theme-dracula'
import 'ace-builds/src-noconflict/mode-json'
import { api } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { LucideCheck, LucideCopy } from "lucide-react"
import Divider from "@/components/ui/Divider"

const Content = () => {
  const [client, setClient] = useState(false)
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

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (50 - 1 + 1)) + 1
  }


  return (
    <div className='w-full px-2 mx-auto md:px-0 md:max-w-[1200px] py-4'>
      <h1 className='text-4xl font-bold'>API de filmes</h1>
      <p className="pt-4 opacity-70">Serviço que fornece uma lista selecionada dos 50 filmes com maior arrecadação de todos os tempos. Nossa API oferece informações detalhadas sobre cada filme, incluindo título, ano de lançamento, diretor e bilheteria. Se você é um entusiasta de cinema, um desenvolvedor em busca de dados para popular seu aplicativo ou simplesmente curioso sobre os filmes com maior arrecadação da história, nossa API tem tudo o que você precisa. Explore o mundo do cinema com a nossa API de Filmes!</p>
      <div className="pt-4 space-y-4">
        <Card>
          <CardContent className="pt-4 pb-0">
            <h1 className="text-xl font-bold">Buscando todos os filmes</h1>
            <div className="pt-6">
              <Divider />
              <div className="grid grid-cols-[150px_1fr] py-2">
                <p>Método</p>
                <p>GET</p>
              </div>
              <Divider />
              <div className="grid grid-cols-[150px_1fr] py-2 items-center">
                <p>URL</p>
                <div className="flex items-center gap-2">
                  <Link
                    className="underline text-blue-500 hover:text-blue-600 transition-all text-xs md:text-sm"
                    href={`${api}movies/findAll`}
                    target="_blank"
                  >
                    https://help2dev.com/api/movies/findAll
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => handleCopy(`${api}movies/findAll`)}>
                    {copy.status && copy.link === `${api}movies/findAll` ? (
                      <LucideCheck size={16} className="z-10 text-green-600" />
                    ) : (
                      <LucideCopy size={16} className="z-10 active:animate-out" />
                    )}
                  </Button>
                </div>
              </div>
              <Divider />
              <div className="grid grid-cols-[150px_1fr] py-2">
                <p>Descrição</p>
                <p>Um array de 50 objetos</p>
              </div>
              <Divider />
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[150px_1fr] py-2 h-[320px] md:h-[310px]">
                <p>Retorno</p>
                {client ? (
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
                      readOnly
                      wrapEnabled
                      editorProps={{ $blockScrolling: Infinity }}
                    />
                  </Card>
                ) : (<Skeleton className="!h-full !w-full rounded-xl" />)}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 pb-0">
            <h1 className="text-xl font-bold">Buscando pelo id</h1>
            <div className="pt-6">
              <Divider />
              <div className="grid grid-cols-[150px_1fr] py-2">
                <p>Método</p>
                <p>GET</p>
              </div>
              <Divider />
              <div className="grid grid-cols-[150px_auto] py-2 items-center">
                <p>URL</p>
                <div className="flex items-center gap-2">
                  <Link
                    className="underline text-blue-500 hover:text-blue-600 transition-all text-xs md:text-sm"
                    href={`${api}movies/${generateRandomNumber()}`}
                    target="_blank"
                  >
                    {`${api}movies/{id}`}

                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => handleCopy(`${api}movies/1`)}>
                    {copy.status && copy.link === `${api}movies/1` ? (
                      <LucideCheck size={16} className="z-10 text-green-600" />
                    ) : (
                      <LucideCopy size={16} className="z-10 active:animate-out" />
                    )}
                  </Button>
                </div>
              </div>
              <Divider />
              <div className="grid grid-cols-[150px_1fr] py-2">
                <p>Descrição</p>
                <p>Um objeto</p>
              </div>
              <Divider />
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[150px_1fr] py-2 h-[320px] md:h-[310px]">
                <p>Retorno</p>
                {client ? (
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
                      readOnly
                      wrapEnabled
                      editorProps={{ $blockScrolling: Infinity }}
                    />
                  </Card>
                ) : (<Skeleton className="!h-full !w-full rounded-xl" />)}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div >
  )
}

export default Content
