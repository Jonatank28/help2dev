import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useRouter } from "@/navigation"
import { differenceInDays, parseISO } from "date-fns"
import Image from "next/image"


const CustomCard = ({ card, }: any) => {
  const router = useRouter()

  const normalizeText = () => {
    const normalizedDescription = card.description
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    return normalizedDescription
  }

  const onClickCard = async () => {
    const formatDescription = await normalizeText()

    router.push(`/blog/${card.id}/${formatDescription}`);
  };



  return (
    <Card className='opacity-100 cursor-pointer border hover:border-violet-600 hover:-translate-y-1 transition-transform' onClick={onClickCard}>
      <CardContent className='p-0'>
        <Image src={card.image} width={200} height={200} alt='image' className='w-full h-[300px] rounded-t-md bg-cover object-cover' />

      </CardContent>
      <CardFooter>
        <div className='grid grid-rows-[auto_80px_auto] space-y-2 pt-4'>
          <h3>{card.title}</h3>
          <h2 className='opacity-60'>{card.description}</h2>
          <p className='opacity-30 text-xs pt-2'>{differenceInDays(new Date(), parseISO(card.date))} dias atrás</p>
        </div>
      </CardFooter>
    </Card>
  )
}

export default CustomCard
