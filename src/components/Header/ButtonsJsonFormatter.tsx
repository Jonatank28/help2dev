import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import { Copy, FlipHorizontal, Sparkles, Trash2 } from "lucide-react"
import { useEditorJson } from "@/hooks/useEditorJson"

const ButtonsJsonFormatter = () => {
  const pathName = usePathname()
  const { clearEditors, copyToClipboard, compactJson, reformatJson, formattedJsonValue } = useEditorJson()
  const verifyExist = formattedJsonValue !== 'Invalid JSON' && formattedJsonValue !== ''

  if (pathName !== "/json-formatter") return null
  return (
    <div className="flex items-center gap-3">
      <Button
        variant='secondary'
        className="gap-1"
        onClick={copyToClipboard}
        disabled={!verifyExist}
      >
        <Copy size={18} />
        <span>Copiar</span>
      </Button>
      <Button
        variant='secondary'
        className="gap-1"
        onClick={reformatJson}
        disabled={!verifyExist}
      >
        <Sparkles size={18} />
        <span>Formatar</span>
      </Button>
      <Button
        variant='secondary'
        className="gap-1"
        onClick={compactJson}
        disabled={!verifyExist}
      >
        <FlipHorizontal size={18} />
        <span>Compactar</span>
      </Button>
      <Button
        variant='secondary'
        className="gap-1"
        onClick={clearEditors}
        disabled={!verifyExist}
      >
        <Trash2 size={18} />
        <span>Limpar</span>
      </Button>
    </div>
  )
}

export default ButtonsJsonFormatter
