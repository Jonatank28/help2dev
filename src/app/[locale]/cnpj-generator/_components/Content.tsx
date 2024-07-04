'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { LucideCheck, LucideCopy, RotateCcw } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'

const generateRandomNumbers = (length: number) => {
  const t = useTranslations('GenerateCnpj')

  const randomNumbers = []
  for (let i = 0; i < length; i++) {
    randomNumbers.push(Math.floor(Math.random() * 9))
  }
  return randomNumbers
}

const calculateVerificationDigits = (numbers: number[], weights: number[]) => {
  let sum = numbers.reduce((acc, num, i) => acc + num * weights[i], 0)
  let rest = sum % 11
  return rest < 2 ? 0 : 11 - rest
}

const formatCnpj = (cnpj: number[], addDots: boolean) => {
  let formattedCnpj = cnpj.join('')
  if (addDots) {
    formattedCnpj = formattedCnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
  }
  return formattedCnpj
}

const Content = () => {
  const [cnpj, setCnpj] = useState('')
  const [copy, setCopy] = useState(false)
  const [generatePoint, setGeneratePoint] = useState('')

  const generateCnpj = () => {
    setCopy(false)
    const cnpjBase = generateRandomNumbers(12)

    const firstDigit = calculateVerificationDigits(cnpjBase, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2])
    cnpjBase.push(firstDigit)

    const secondDigit = calculateVerificationDigits(cnpjBase, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2])
    cnpjBase.push(secondDigit)

    setCnpj(formatCnpj(cnpjBase, generatePoint === 'true'))
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(cnpj)
    setCopy(true)
    setTimeout(() => setCopy(false), 2000)
  }

  const changeGeneratePoint = (value: string) => {
    const storage = JSON.parse(localStorage.getItem('@help2dev') || '{}')
    const updatedStorage = {
      ...storage,
      generateCnpj: {
        ...storage.generateCnpj,
        generatePoint: value,
      },
    }
    localStorage.setItem('@help2dev', JSON.stringify(updatedStorage))
    setGeneratePoint(value)
  }

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('@help2dev') || '{}')
    if (!storage.generateCnpj) {
      const defaultSettings = { generateCnpj: { generatePoint: 'true' } }
      localStorage.setItem('@help2dev', JSON.stringify(defaultSettings))
      setGeneratePoint('true')
    } else {
      setGeneratePoint(String(storage.generateCnpj.generatePoint) ?? 'true')
    }
  }, [])

  return (
    <div className='h-full flex justify-center items-center'>
      <Card className='w-full mx-2 md:mx-0 md:w-auto md:min-w-[400px] mb-52'>
        <CardContent className='p-4 md:p-6'>
          <h1 className='text-xl font-bold'>Gerador de CNPJ</h1>
          <div className='pt-4 space-y-1'>
            <Label className='text-muted-foreground'>Gerar pontuação</Label>
            <RadioGroup key={generatePoint} defaultValue={generatePoint} className='flex'>
              {['true', 'false'].map((value) => (
                <div
                  key={value}
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() => changeGeneratePoint(value)}
                >
                  <RadioGroupItem value={value} id={value} className='h-[20px] w-[20px]' />
                  <Label htmlFor={value} className='cursor-pointer py-2'>{value === 'true' ? 'Sim' : 'Não'}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div>
            <Button className='mt-4 w-full gap-2' aria-label='GenerateCpf' onClick={generateCnpj}>
              <RotateCcw size={18} />
              <p>Gerar</p>
            </Button>
            {!cnpj ? (
              <p className="text-xs mt-4 opacity-60">Clique no botão acima para gerar um novo CNPJ.</p>
            ) : (
              <div className="bg-accent p-4 mt-4 rounded-[2px] relative">
                <div
                  className="absolute right-1 top-1 cursor-pointer hover:bg-background rounded-[2px] transition-colors p-2 z-20"
                  onClick={handleCopy}
                >
                  {!copy ? (
                    <LucideCopy size={18} className="z-10 active:animate-out" />
                  ) : (
                    <LucideCheck size={18} className="z-10 text-green-600" />
                  )}
                </div>
                <p className="text-sm opacity-80">CNPJ: {cnpj}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Content
