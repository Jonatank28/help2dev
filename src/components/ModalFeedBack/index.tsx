import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Cross2Icon } from "@radix-ui/react-icons"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const schema = z.object({
  name: z.string().min(1, { message: 'O nome é obrigatório' }),
})


export default function ModalFeedback({ open, onClose }: { open: boolean, onClose: () => void }) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
    },
    mode: 'onChange',
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log("🚀  values", values);
  }

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent className="sm:max-w-[425px]">
        <div onClick={onClose} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-pointer">
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle>Envie-nos seu feedback</AlertDialogTitle>
          <AlertDialogDescription>
            Agradecemos por reservar um tempo para compartilhar suas idéias conosco.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div>
          <Form {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <AlertDialogFooter className="flex justify-end gap-2">
                <Button variant='destructive' onClick={onClose} type="button" className="opacity-80">Cancelar</Button>
                <Button type="submit" onClick={form.handleSubmit(onSubmit)}>Enviar</Button>
              </AlertDialogFooter>
            </form>
          </Form>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}