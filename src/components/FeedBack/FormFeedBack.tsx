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
      toast.error('Error, please try again')
    } else {
      onClose()
      toast.success('Thank you for your feedback!')
      resetForm()
    }
  }

  const typeFeedBack = [
    {
      id: 1,
      name: 'Doubt',
    },
    {
      id: 2,
      name: 'Error',
    },
    {
      id: 3,
      name: 'Suggestion',
    },
  ]

  useEffect(() => {
    resetForm()
  }, [onClose])

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tell me your experience</AlertDialogTitle>
          <AlertDialogDescription>
            {/* Type */}
            <div className="mt-4 space-y-2">
              <Input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Select onValueChange={(e) => setType(e)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Type feedback" />
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
                placeholder="Type your message here."
                className="border border-background-foreground resize-none"
                rows={6}
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
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
            {isLoading ? 'Sending...' : 'Send'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default FormFeedBack
