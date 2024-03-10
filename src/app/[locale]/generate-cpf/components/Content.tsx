'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { FaRedoAlt } from 'react-icons/fa'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { ufs } from '@/data/ufs'
import { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { LuCopy } from 'react-icons/lu'
import { FaCheck } from 'react-icons/fa6'

const Content = () => {
  const [cpf, setCpf] = useState('')
  const [uf, setUf] = useState('')
  const [generatePoint, setGeneratePoint] = useState('')
  const [copy, setCopy] = useState(false)

  // generate cpf
  const generateCpf = () => {
    setCopy(false)
    const randomiza = (n: number) => Math.floor(Math.random() * n)
    const cpf = []

    if (uf !== 'indifferent') {
      const ufIndex = ufs.indexOf(uf)
      if (ufIndex !== -1) {
        cpf.push(Math.floor(ufIndex / 10))
        cpf.push(ufIndex % 10)
      }
      for (let i = 0; i < 7; i++) {
        cpf.push(randomiza(9))
      }
    } else {
      for (let i = 0; i < 9; i++) {
        cpf.push(randomiza(9))
      }
    }

    let sum = cpf.reduce((acc, val, i) => acc + val * (10 - i), 0)
    let rest = sum % 11
    cpf.push(rest < 2 ? 0 : 11 - rest)

    sum = cpf.reduce((acc, val, i) => acc + val * (11 - i), 0)
    rest = sum % 11
    cpf.push(rest < 2 ? 0 : 11 - rest)

    let cpfFormatted = cpf.join('')

    if (generatePoint === 'true') {
      cpfFormatted = cpfFormatted.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        '$1.$2.$3-$4'
      )
    }

    setCpf(cpfFormatted)
  }

  // copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(cpf)
    setCopy(true)
    setTimeout(() => setCopy(false), 2000)
  }

  // change uf and save in local storage
  const changeUf = (e: string) => {
    const storage = JSON.parse(localStorage.getItem('@help2dev') || '{}')
    setUf(e)
    const tempUf = {
      ...storage,
      generateCpf: {
        ...storage.generateCpf,
        uf: e,
      },
    }
    localStorage.setItem('@help2dev', JSON.stringify(tempUf))
  }

  // change generate point and save in local storage
  const changeGeneratePoint = (value: string) => {
    const storage = JSON.parse(localStorage.getItem('@help2dev') || '{}')
    const tempGeneratePoint = {
      ...storage,
      generateCpf: {
        ...storage.generateCpf,
        generatePoint: value,
      },
    }
    localStorage.setItem('@help2dev', JSON.stringify(tempGeneratePoint))
    setGeneratePoint(value)
  }

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('@help2dev') || '{}')
    setUf(storage.generateCpf?.uf || 'indifferent')
    setGeneratePoint(storage.generateCpf?.generatePoint || 'true')
  }, [])

  return (
    generatePoint &&
    uf && (
      <Card className="mb-[200px] w-[400px]">
        <CardHeader>Generate CPF</CardHeader>
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
            <div className="space-y-1">
              <Label className="text-xs opacity-40">State of origin?</Label>
              <Select value={uf} onValueChange={(e) => changeUf(e)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ufs.map((uf) => {
                    return (
                      <SelectItem key={uf} value={uf}>
                        {uf}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Button
              className="mt-6 w-full text-white active:animate-out flex items-center justify-center gap-2"
              onClick={generateCpf}
            >
              <FaRedoAlt />
              Generate CPF
            </Button>
            {!cpf ? (
              <p className="text-xs mt-4 opacity-40">No generated CPF yet.</p>
            ) : (
              <div className="bg-secondary p-4 mt-4 rounded-[2px] relative ">
                <div
                  className="absolute right-1 top-1 cursor-pointer hover:bg-background rounded-[2px] transition-colors p-2 z-20"
                  onClick={handleCopy}
                >
                  <div>
                    {!copy ? (
                      <LuCopy className="z-10 active:animate-out" />
                    ) : (
                      <FaCheck className="z-10 text-green-600" />
                    )}
                  </div>
                </div>
                <p className="text-sm opacity-80">CPF: {cpf}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    )
  )
}

export default Content
