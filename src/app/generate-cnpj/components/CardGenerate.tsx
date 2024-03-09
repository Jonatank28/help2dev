'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { FaRedoAlt } from 'react-icons/fa'

import { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { LuCopy } from 'react-icons/lu'
import { FaCheck } from 'react-icons/fa6'

const CardGenerate = () => {
  const [cnpj, setCnpj] = useState('')
  const [copy, setCopy] = useState(false)
  const [generatePoint, setGeneratePoint] = useState('')

  const generateCnpj = () => {
    setCopy(false)
    const randomiza = (n: number) => Math.floor(Math.random() * n)
    const cnpj = []

    for (let i = 0; i < 12; i++) {
      cnpj.push(randomiza(9))
    }

    let sum = cnpj.reduce((acc, val, i) => acc + val * (5 - (i % 4)), 0)
    let rest = sum % 11
    cnpj.push(rest < 2 ? 0 : 11 - rest)

    sum = cnpj.reduce((acc, val, i) => acc + val * (6 - (i % 5)), 0)
    rest = sum % 11
    cnpj.push(rest < 2 ? 0 : 11 - rest)

    let cnpjFormatted = cnpj.join('')

    if (generatePoint === 'true') {
      cnpjFormatted = cnpjFormatted.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        '$1.$2.$3/$4-$5'
      )
    }

    setCnpj(cnpjFormatted)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(cnpj)
    setCopy(true)
    setTimeout(() => setCopy(false), 2000)
  }

  const changeGeneratePoint = (value: string) => {
    const storage = JSON.parse(localStorage.getItem('@help2dev') || '{}')
    const tempGeneratePoint = {
      ...storage,
      generateCnpj: {
        ...storage.generateCnpj,
        generatePoint: value,
      },
    }
    localStorage.setItem('@help2dev', JSON.stringify(tempGeneratePoint))
    setGeneratePoint(value)
  }

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('@help2dev') || '{}')
    setGeneratePoint(String(storage.generateCnpj?.generatePoint) ?? 'true')
  }, [generatePoint])

  return (
    generatePoint && (
      <Card className="mb-[200px] w-[400px]">
        <CardHeader>Generate CNPJ</CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <RadioGroup
              defaultValue={generatePoint}
              onValueChange={(value: string) => changeGeneratePoint(value)}
            >
              <label className="text-xs mt-[6px] opacity-40">
                {' '}
                Generate point?
              </label>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  <RadioGroupItem value="true" id="true" />
                  <label htmlFor="true">Sim</label>
                </div>
                <div className="flex items-center gap-1">
                  <RadioGroupItem value="false" id="false" />
                  <label htmlFor="false">Não</label>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Button
              className="mt-6 w-full text-white active:animate-out flex items-center justify-center gap-2"
              onClick={generateCnpj}
            >
              <FaRedoAlt />
              Generate CNPJ
            </Button>
            {!cnpj ? (
              <p className="text-xs mt-4 opacity-40">No generated CPF yet.</p>
            ) : (
              <div className="bg-secondary p-4 mt-4 rounded-[2px] relative ">
                <div
                  className="absolute right-1 top-1 cursor-pointer hover:bg-background rounded-[2px] transition-colors p-2 z-20"
                  onClick={handleCopy}
                >
                  <div>
                    {!copy ? (
                      <LuCopy className="z-10 active:animate-out active:bg-destructive" />
                    ) : (
                      <FaCheck className="z-10 text-green-600" />
                    )}
                  </div>
                </div>
                <p className="text-sm opacity-80">CNPJ: {cnpj}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    )
    // '''
  )
}

export default CardGenerate
