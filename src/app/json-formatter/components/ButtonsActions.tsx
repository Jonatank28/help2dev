import SelectedThemeEditor from '@/components/SelectedThemeEditor'
import { Button } from '@/components/ui/button'
import { useEditor } from '@/context/editorContext'
import React from 'react'
import { LuCopy } from 'react-icons/lu'
import { FiTrash } from 'react-icons/fi'
import { MdCompress } from 'react-icons/md'
import { BsStars } from 'react-icons/bs'
import { toast } from 'sonner'

const ButtonsActions = () => {
  const { formattedJson, setFormattedJson, setJsonInput } = useEditor()

  // copy code
  const handleCopyCode = () => {
    try {
      navigator.clipboard.writeText(formattedJson)
      toast.success('Copied to clipboard')
    } catch (error) {
      toast.error('Error copying')
    }
  }
  // beautifies the code
  const handlePrettify = () => {
    try {
      const parsedJson = JSON.parse(formattedJson)
      const res = JSON.stringify(parsedJson, null, 2)
      setFormattedJson(res)
    } catch (error) {
      toast.error('Error formatting')
    }
  }

  // compact the code
  const handleMinify = () => {
    try {
      setFormattedJson(JSON.stringify(JSON.parse(formattedJson)))
    } catch (error) {
      toast.error('Error minifying')
    }
  }

  return (
    <>
      <Button
        variant="outline"
        onClick={handleCopyCode}
        disabled={!formattedJson}
      >
        <LuCopy className="mr-2 h-4 w-4" />
        Copy
      </Button>{' '}
      <Button
        variant="outline"
        onClick={handlePrettify}
        disabled={!formattedJson}
      >
        <BsStars className="mr-2 h-4 w-4" />
        Prettify
      </Button>
      <Button
        variant="outline"
        onClick={handleMinify}
        disabled={!formattedJson}
      >
        <MdCompress className="mr-2 h-4 w-4" />
        Minify
      </Button>
      <Button
        disabled={!formattedJson}
        variant="outline"
        className="hover:bg-destructive hover:text-white"
        onClick={() => setJsonInput('')}
      >
        <FiTrash className="mr-2 h-4 w-4" />
        Clear
      </Button>
      <SelectedThemeEditor />
    </>
  )
}

export default ButtonsActions
