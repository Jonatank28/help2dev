import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

interface Props {
  open: boolean
  onClose: () => void
}

const FormFeedBack = ({ open, onClose }: Props) => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('submit')
  }

  const typeFeedBack = [
    {
      id: 1,
      name: 'Dúvidas',
    },
    {
      id: 2,
      name: 'Erro',
    },
    {
      id: 3,
      name: 'Sugestão',
    },
  ]

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            <p>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </p>
            {/* Type */}
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
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
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleFormSubmit} className="text-white">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default FormFeedBack
