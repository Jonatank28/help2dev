'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { LucideCheck, LucideCopy, RotateCcw } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Content = () => {
  const [cpf, setCpf] = useState('')
  const [generatePoint, setGeneratePoint] = useState('')
  const [copy, setCopy] = useState(false)

  const randomize = (n: number) => Math.floor(Math.random() * n)

  const generateCpf = () => {
    setCopy(false)
    const cpf = Array.from({ length: 9 }, () => randomize(9))

    const calculateDigit = (cpf: number[], factor = 9) => {
      const sum = cpf.reduce((acc, val, i) => acc + val * (factor - i), 0)
      const rest = sum % 11
      return rest < 2 ? 0 : 11 - rest
    }

    cpf.push(calculateDigit(cpf, 10))
    cpf.push(calculateDigit(cpf, 11))

    let cpfFormatted = cpf.join('')
    if (generatePoint === 'true') {
      cpfFormatted = cpfFormatted.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    }

    setCpf(cpfFormatted)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(cpf)
    setCopy(true)
    setTimeout(() => setCopy(false), 2000)
  }

  const changeGeneratePoint = (value: string) => {
    const storage = JSON.parse(localStorage.getItem('@help2dev') || '{}')
    const updatedStorage = {
      ...storage,
      generateCpf: {
        ...storage.generateCpf,
        generatePoint: value,
      },
    }
    localStorage.setItem('@help2dev', JSON.stringify(updatedStorage))
    setGeneratePoint(value)
  }

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('@help2dev') || '{}')
    setGeneratePoint(storage.generateCpf?.generatePoint || 'true')
  }, [])

  return (
    <div className='h-full flex justify-center items-center'>
      <Card className='min-w-[400px] mb-52'>
        <CardContent className='p-6'>
          <h1 className='text-xl font-bold'>Gerador de CPF</h1>
          <div className='pt-4 space-y-1'>
            <Label className='text-muted-foreground'>Gerar pontuação</Label>
            <RadioGroup
              key={generatePoint}
              defaultValue={generatePoint}
              className='flex'
            >
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => changeGeneratePoint('true')}>
                <RadioGroupItem value="true" id="true" className='h-[20px] w-[20px]' />
                <Label htmlFor="true" className='cursor-pointer py-2'>Sim</Label>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => changeGeneratePoint('false')}>
                <RadioGroupItem value="false" id="false" className='h-[20px] w-[20px]' />
                <Label htmlFor="false" className='cursor-pointer py-2'>Não</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Button className='mt-4 w-full' aria-label='GenerateCpf' onClick={generateCpf}>
              <RotateCcw />
              <p>Gerar</p>
            </Button>
            {!cpf ? (
              <p className="text-xs mt-4 opacity-60">Clique no botão acima para gerar um novo CPF.</p>
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
                <p className="text-sm opacity-80">CPF: {cpf}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Content
