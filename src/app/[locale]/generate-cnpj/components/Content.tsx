'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { FaRedoAlt } from 'react-icons/fa'

import { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { LuCopy } from 'react-icons/lu'
import { FaCheck } from 'react-icons/fa6'
import { AbstractIntlMessages, useMessages } from 'next-intl'

const Content = () => {
  const [cnpj, setCnpj] = useState('')
  const [copy, setCopy] = useState(false)
  const [generatePoint, setGeneratePoint] = useState('')
  const messages = useMessages()
  const generateCPFMessages: AbstractIntlMessages | any =
    messages['generateCnpj']
  const { card } = generateCPFMessages

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
        <CardHeader>{card['title']}</CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <RadioGroup
              defaultValue={generatePoint}
              onValueChange={(value: string) => changeGeneratePoint(value)}
            >
              <label className="text-xs mt-[6px] opacity-60">
                {card['radioPointTitle']}
              </label>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  <RadioGroupItem value="true" id="true" role="radio" aria-checked="true" data-state="checked" />
                  <label htmlFor="true">{card['radioPointTrue']}</label>
                </div>
                <div className="flex items-center gap-1">
                  <RadioGroupItem value="false" id="false" role="radio" aria-checked="false" data-state="unchecked" />
                  <label htmlFor="false">{card['radioPointFalse']}</label>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Button
              aria-label='Generate new CNPJ'
              className="mt-6 w-full text-white active:animate-out flex items-center justify-center gap-2"
              onClick={generateCnpj}
            >
              <FaRedoAlt />
              {card['button']}
            </Button>
            {!cnpj ? (
              <p className="text-xs mt-4 opacity-60">
                {card['messageNoGeneration']}.
              </p>
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
  )
}

export default Content
