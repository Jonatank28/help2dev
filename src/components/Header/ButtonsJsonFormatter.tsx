import { Button } from "../ui/button"
import { Copy, FlipHorizontal, Sparkles, SquareCode, Trash2 } from "lucide-react"
import { useEditorJson } from "@/hooks/useEditorJson"
import { usePathname } from "@/navigation"
import { useTranslations } from "next-intl"
import { useToast } from "../ui/use-toast"
import { useState } from "react"
import ModalGenerateTypes from "./ModalGenerateTypes"

const ButtonsJsonFormatter = () => {
  const pathName = usePathname()
  const { toast } = useToast()
  const { clearEditors, compactJson, reformatJson, formattedJsonValue } = useEditorJson()
  const [openModalGenerateTypes, setOpenModalGenerateTypes] = useState(false)
  const verifyExist = formattedJsonValue !== 'Invalid JSON' && formattedJsonValue !== ''
  const t = useTranslations("JsonFormatter")

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(formattedJsonValue);
      toast({
        description: t("toastMessage.copy"),
      })
    } catch (error) {
      toast({
        description: t("toastMessage.errorCopy"),
      })
    }
  }

  if (pathName !== "/json-formatter") return null

  return (
    <>
      {/* <ModalGenerateTypes open={openModalGenerateTypes} onClose={() => setOpenModalGenerateTypes(false)} /> */}
      <div className="hidden md:flex items-center gap-2">
        {/* <Button
          variant='secondary'
          className="gap-1"
          disabled={!verifyExist}
          onClick={() => setOpenModalGenerateTypes(true)}
        >
          <SquareCode size={18} />
          <span>{t("buttonsAction.generateTypes")}</span>
        </Button> */}
        <Button
          variant='secondary'
          className="gap-1"
          onClick={copyToClipboard}
          disabled={!verifyExist}
        >
          <Copy size={18} />
          <span>{t("buttonsAction.copy")}</span>
        </Button>
        <Button
          variant='secondary'
          className="gap-1"
          onClick={reformatJson}
          disabled={!verifyExist}
        >
          <Sparkles size={18} />
          <span>{t("buttonsAction.prettify")}</span>
        </Button>
        <Button
          variant='secondary'
          className="gap-1"
          onClick={compactJson}
          disabled={!verifyExist}
        >
          <FlipHorizontal size={18} />
          <span>{t("buttonsAction.minify")}</span>
        </Button>
        <Button
          variant='secondary'
          className="gap-1"
          onClick={clearEditors}
          disabled={!verifyExist}
        >
          <Trash2 size={18} />
          <span>{t("buttonsAction.clear")}</span>
        </Button>
      </div>
    </>
  )
}

export default ButtonsJsonFormatter
