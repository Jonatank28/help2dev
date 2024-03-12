'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { api } from '@/lib/api'
import Link from 'next/link'
import AceEditor from 'react-ace'
import findAll from '../data/findAllExample.json'
import findOne from '../data/findOneExample.json'
import 'ace-builds/src-noconflict/theme-dracula'
import 'ace-builds/src-noconflict/mode-json'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Content = () => {
  const { theme } = useTheme()
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  return (
    <main className="md:mx-2">
      <div className="w-[min(1200px,95vw)] mx-auto">
        <h1 className="text-3xl font-bold mb-4">API de Filmes</h1>
        <p className="mb-6 text-sm">
          Serviço que fornece uma lista selecionada dos 50 filmes com maior
          arrecadação de todos os tempos. Nossa API oferece informações
          detalhadas sobre cada filme, incluindo título, ano de lançamento,
          diretor e bilheteria. Se você é um entusiasta de cinema, um
          desenvolvedor em busca de dados para popular seu aplicativo ou
          simplesmente curioso sobre os filmes com maior arrecadação da
          história, nossa API tem tudo o que você precisa. Explore o mundo do
          cinema com a nossa API de Filmes!
        </p>
        <div className='space-y-4 mb-8'>
          <Card>
            <CardHeader className="p-2"><h1 className='text-xl font-bold text-center'>Buscando todos os filmes</h1></CardHeader>
            <CardContent className="p-0 text-sm">
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[150px_1fr] border-t p-2">
                <p>Método</p>
                <p>GET</p>
              </div>
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[150px_1fr] border-t p-2">
                <p>URL</p>
                <Link
                  className="text-blue-500 underline"
                  href={`${api}movies/findAll`}
                  target="_blank"
                >
                  {`${api}movies/findAll`}
                </Link>
              </div>
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[150px_1fr]  border-t p-2">
                <p>Descrição</p>
                <p>Um array de 50 objetos</p>
              </div>
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[150px_1fr]  border-t p-2 h-[320px] md:h-[310px]">
                <p>Retorno</p>
                {client && (
                  <Card className="p-2 bg-[#282A36]">
                    <AceEditor
                      style={{ borderRadius: '8px' }}
                      mode="json"
                      theme={theme === 'dark' ? 'dracula' : 'github'}
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
            <CardHeader className="p-2"><h1 className='text-xl font-bold text-center'>Buscando filme por ID</h1></CardHeader>
            <CardContent className="p-0 text-sm">
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[150px_1fr] border-t p-2">
                <p>Método</p>
                <p>GET</p>
              </div>
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[150px_1fr] border-t p-2">
                <p>URL</p>
                <Link
                  className="text-blue-500 underline"
                  href={`${api}movies/1/findOne`}
                  target="_blank"
                >
                  {`${api}movies/{id}/findOne`}
                </Link>
              </div>
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[150px_1fr]  border-t p-2">
                <p>Descrição</p>
                <p>Um objeto</p>
              </div>
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[150px_1fr]  border-t p-2 h-[155px] md:h-[155px]">
                <p>Retorno</p>
                {client && (
                  <Card className="p-2 bg-[#282A36]">
                    <AceEditor
                      style={{ borderRadius: '8px' }}
                      mode="json"
                      theme={theme === 'dark' ? 'dracula' : 'github'}
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
    </main>
  )
}

export default Content
