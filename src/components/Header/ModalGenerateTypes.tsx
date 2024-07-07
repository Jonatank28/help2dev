import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useEditorJson } from "@/hooks/useEditorJson"
import { useEffect, useState } from "react"
import { getTypesGenerate } from "./_actions/getTypesGenerate"


const ModalGenerateTypes = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
  const { jsonValue } = useEditorJson()
  const [types, setTypes] = useState<string>("")

  const getTypes = async () => {
    console.log("hellooo")
    const res = await getTypesGenerate()
    console.log("🚀  res", res.response);
    // setTypes(res)
  }

  useEffect(() => {
    if (jsonValue) {
      getTypes()
    }
  }, [jsonValue])

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Generate types</DialogTitle>
        </DialogHeader>
        <div className="max-h-[60vh]">
          <div className="h-full w-full overflow-y-auto bg-secondary rounded-md p-2">
            <pre>{types}</pre>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ModalGenerateTypes
