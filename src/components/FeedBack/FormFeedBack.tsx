import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { useEffect, useState } from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'sonner'
import useLoading from '@/hooks/useLoading'
import { isValidEmail } from '@/lib/utils'
import { AbstractIntlMessages, useMessages } from 'next-intl'
import { useLocale } from 'use-intl'

interface Props {
  open: boolean
  onClose: () => void
}

const FormFeedBack = ({ open, onClose }: Props) => {
  const { isLoading, startLoading, stopLoading } = useLoading()
  const [name, setName] = useState<null | string>(null)
  const [email, setEmail] = useState<null | string>(null)
  const [type, setType] = useState<null | string>(null)
  const [message, setMessage] = useState<null | string>(null)
  const messages = useMessages()
  const a: AbstractIntlMessages | any = messages['ModalFeedBack']
  const locale = useLocale()

  const resetForm = () => {
    setName(null)
    setEmail(null)
    setType(null)
    setMessage(null)
  }

  const sendEmail = async () => {
    startLoading()
    try {
      await emailjs.send(
        'service_k21iesm',
        'template_3m4hvfq',
        {
          from_name: name,
          from_email: email,
          type: type,
          message: message,
        },
        'HGj7UBc6tZzJNEO9g'
      )
      return true
    } catch (error) {
      return false
    } finally {
      stopLoading()
    }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const send = await sendEmail()
    if (!send) {
      toast.error(a['toastErr'])
    } else {
      onClose()
      toast.success(a['toastSuccess'])
      resetForm()
    }
  }

  const typeFeedBack = [
    {
      id: 1,
      name: locale === 'en' ? 'Doubt' : locale === 'es' ? 'Duda' : 'Duvida',
    },
    {
      id: 2,
      name:
        locale === 'en'
          ? 'Suggestion'
          : locale === 'es'
            ? 'Sugerencia'
            : 'Sugestão',
    },
    {
      id: 3,
      name: locale === 'en' ? 'Err' : locale === 'es' ? 'Error' : 'Erro',
    },
    {
      id: 4,
      name:
        locale === 'en'
          ? 'Feedback'
          : locale === 'es'
            ? 'Comentario'
            : 'Comentário',
    },
  ]

  useEffect(() => {
    resetForm()
  }, [onClose])

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent className="w-[96vw] rounded-md max-w-md space-y-6">
        <AlertDialogHeader>
          <AlertDialogTitle>{a['title']}</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="mt-4 space-y-2">
              <Input
                placeholder={a['name']}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Select onValueChange={(e) => setType(e)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={a['type']} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {typeFeedBack.map((type) => {
                      return (
                        <SelectItem key={type.id} value={type.name}>
                          {type.name}
                        </SelectItem>
                      )
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder={a['message']}
                className="border border-background-foreground resize-none"
                rows={6}
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{a['cancel']}</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleFormSubmit}
            className="text-white"
            disabled={
              !name ||
              !isValidEmail(email || '') ||
              !type ||
              !message ||
              isLoading
            }
          >
            {isLoading ? a['sending'] : a['send']}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default FormFeedBack
