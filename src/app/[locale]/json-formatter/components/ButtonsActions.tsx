import SelectedThemeEditor from '@/components/SelectedThemeEditor'
import { Button } from '@/components/ui/button'
import { useEditor } from '@/context/editorContext'
import React from 'react'
import { LuCopy } from 'react-icons/lu'
import { FiTrash } from 'react-icons/fi'
import { MdCompress } from 'react-icons/md'
import { BsStars } from 'react-icons/bs'
import { toast } from 'sonner'
import { usePathname } from '@/navigation'
import { AbstractIntlMessages, useMessages } from 'next-intl'

const ButtonsActions = () => {
  const pathName = usePathname()
  const { formattedJson, setFormattedJson, setJsonInput } = useEditor()
  const messages = useMessages()
  if (!pathName.includes('/json-formatter')) return null
  const jsonFormatterMessages: AbstractIntlMessages | any =
    messages['jsonFormatter']
  const { buttonsAction, toastMessage } = jsonFormatterMessages

  // copy code
  const handleCopyCode = () => {
    try {
      navigator.clipboard.writeText(formattedJson)
      toast.success(toastMessage['copy'])
    } catch (error) {
      toast.error(toastMessage('errorCopy'))
    }
  }
  // beautifies the code
  const handlePrettify = () => {
    try {
      const parsedJson = JSON.parse(formattedJson)
      const res = JSON.stringify(parsedJson, null, 2)
      setFormattedJson(res)
    } catch (error) {
      toast.error(toastMessage('errorPrettify'))
    }
  }

  // compact the code
  const handleMinify = () => {
    try {
      setFormattedJson(JSON.stringify(JSON.parse(formattedJson)))
    } catch (error) {
      toast.error(toastMessage('errorMinify'))
    }
  }

  return (
    <div className="hidden md:flex items-center gap-2">
      <Button
        variant="outline"
        onClick={handleCopyCode}
        disabled={!formattedJson}
      >
        <LuCopy className="mr-2 h-4 w-4" />
        {buttonsAction['copy']}
      </Button>{' '}
      <Button
        variant="outline"
        onClick={handlePrettify}
        disabled={!formattedJson}
      >
        <BsStars className="mr-2 h-4 w-4" />
        {buttonsAction['prettify']}
      </Button>
      <Button
        variant="outline"
        onClick={handleMinify}
        disabled={!formattedJson}
      >
        <MdCompress className="mr-2 h-4 w-4" />
        {buttonsAction['minify']}
      </Button>
      <Button
        disabled={!formattedJson}
        variant="outline"
        className="hover:bg-destructive hover:text-white"
        onClick={() => setJsonInput('')}
      >
        <FiTrash className="mr-2 h-4 w-4" />
        {buttonsAction['clear']}
      </Button>
      <SelectedThemeEditor />
    </div>
  )
}

export default ButtonsActions
