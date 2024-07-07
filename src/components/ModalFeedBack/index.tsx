import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomInput from "../forms/CustomInput";
import { useLocale } from "next-intl";
import CustomSelect from "../forms/CustomSelect";
import { Label } from "../ui/label";
import emailjs from 'emailjs-com';
import { useToast } from "../ui/use-toast";

const typeFeedBack = {
  pt: [
    { key: '1', label: 'Dúvida' },
    { key: '2', label: 'Sugestão' },
    { key: '3', label: 'Erro' },
    { key: '4', label: 'Comentário' },
  ],
  en: [
    { key: '1', label: 'Doubt' },
    { key: '2', label: 'Suggestion' },
    { key: '3', label: 'Error' },
    { key: '4', label: 'Feedback' },
  ],
  es: [
    { key: '1', label: 'Duda' },
    { key: '2', label: 'Sugerencia' },
    { key: '3', label: 'Error' },
    { key: '4', label: 'Comentario' },
  ],
};


const errorMessages = {
  pt: {
    name: 'O nome é obrigatório',
    email: 'O email é obrigatório',
    type: 'O tipo de feedback é obrigatório',
    message: 'O feedback é obrigatório',
  },
  en: {
    name: 'Name is required',
    email: 'Email is required',
    type: 'Feedback type is required',
    message: 'Feedback is required',
  },
  es: {
    name: 'El nombre es obligatorio',
    email: 'El correo electrónico es obligatorio',
    type: 'El tipo de comentario es obligatorio',
    message: 'El comentario es obligatorio',
  }
};

const toastMessages = {
  pt: {
    success: 'Feedback enviado com sucesso!',
    error: 'Erro ao enviar o feedback.',
  },
  en: {
    success: 'Feedback successfully sent!',
    error: 'Error sending feedback.',
  },
  es: {
    success: 'Comentarios enviados con éxito!',
    error: 'Error al enviar los comentarios.',
  }
};

type LocaleTypes = 'pt' | 'en' | 'es';

const getSchema = (locale: LocaleTypes) => {
  return z.object({
    name: z.string().min(1, { message: errorMessages[locale].name }),
    email: z.string().min(1, { message: errorMessages[locale].email }),
    type: z.string().min(1, { message: errorMessages[locale].type }),
    message: z.string().min(1, { message: errorMessages[locale].message }),
  });
};

type SchemaType = z.infer<ReturnType<typeof getSchema>>;

interface ModalFeedbackProps {
  open: boolean;
  onClose: () => void;
}

export default function ModalFeedback({ open, onClose }: ModalFeedbackProps) {
  const locale = useLocale() as LocaleTypes;
  const schema = getSchema(locale);
  const { toast } = useToast()

  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      type: '',
      message: '',
    },
    mode: 'onChange',
  });

  const sendEmail = async (data: SchemaType) => {
    try {
      await emailjs.send(
        'service_k21iesm',
        'template_3m4hvfq',
        {
          from_name: data.name,
          from_email: data.email,
          type: typeFeedBack['pt'].find((item) => item.key === data.type)?.label,
          message: data.message,
        },
        'HGj7UBc6tZzJNEO9g'
      );
      return true;
    } catch (error) {
      return false;
    }
  };

  const onSubmit: SubmitHandler<SchemaType> = async (data) => {
    const send = await sendEmail(data);
    if (!send) {
      toast({
        description: toastMessages[locale].error,
      });
    } else {
      onClose();
      toast({
        description: toastMessages[locale].success,
      });
      form.reset();
    }
  };


  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <AlertDialog open={open} onOpenChange={handleClose}>
      <AlertDialogContent className="sm:max-w-[425px]">
        <div onClick={handleClose} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-pointer">
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {locale === 'en' ? 'Send us your feedback' : locale === 'es' ? 'Envíenos sus comentarios' : 'Envie-nos seu feedback'}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {locale === 'en' ? 'We appreciate you taking the time to share your thoughts with us.' : locale === 'es' ? 'Agradecemos que se tome el tiempo para compartir sus pensamientos con nosotros.' : 'Agradecemos por reservar um tempo para compartilhar suas idéias conosco.'}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div>
          <Form {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
              <CustomInput
                form={form}
                name="name"
                label={locale === 'en' ? 'Name' : locale === 'es' ? 'Nombre' : 'Nome'}
              />
              <CustomInput
                form={form}
                name="email"
                label="Email"
              />
              <CustomSelect
                form={form}
                name="type"
                label={locale === 'en' ? 'Feedback Type' : locale === 'es' ? 'Tipo de Comentario' : 'Tipo de Feedback'}
                options={typeFeedBack[locale]}
              />
              <div className="space-y-1">
                <Label htmlFor="message">
                  {locale === 'en' ? 'Message' : locale === 'es' ? 'Mensaje' : 'Mensagem'}
                </Label>
                <Textarea
                  {...form.register('message')}
                  className="w-full"
                  name="message"
                  rows={5}
                />
              </div>
              <AlertDialogFooter className="flex justify-end gap-2">
                <Button
                  variant='destructive'
                  onClick={handleClose}
                  type="button"
                  className="opacity-80"
                >
                  {locale === 'en' ? 'Cancel' : locale === 'es' ? 'Cancelar' : 'Cancelar'}
                </Button>
                <Button
                  type="submit"
                  onClick={form.handleSubmit(onSubmit)}
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting
                    ? (locale === 'en' ? 'Sending...' : locale === 'es' ? 'Enviando...' : 'Enviando...')
                    : (locale === 'en' ? 'Send' : locale === 'es' ? 'Enviar' : 'Enviar')}
                </Button>
              </AlertDialogFooter>
            </form>
          </Form>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
