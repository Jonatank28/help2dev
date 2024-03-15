import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { AiOutlineMail } from "react-icons/ai";

const Newsletter = () => {
  return (
    <section>
      <div className="flex gap-6 pb-4">
        <div className="border-t w-full" ></div>
        <div className="border-t w-full" ></div>
      </div>
      <div className="widthDefault">
        <h1 className="text-3xl font-bold text-center ">Newsletter</h1>
        <div className="pt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <div><h2 className="text-lg font-medium text-center ">Receba conteúdos inéditos e novidades gratuitamente</h2></div>
          <div className="flex flex-col md:flex-row items-center gap-2 relative w-full md:w-auto">

            <Input type="email" placeholder="Digite seu email" className="rounded-sm pl-10 py-5 w-full md:w-[350px]" disabled />
            <div className="absolute translate-x-[-50%] translate-y-[-50%] left-5 top-5 md:top-1/2">
              <AiOutlineMail className="text-2xl " />
            </div>
            <Button variant="secondary" className="py-5 w-full md:w-auto mt-2 md:mt-0" disabled>Enviar</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
