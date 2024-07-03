import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const page = () => {
  return (
    <div className="defaultWidth">
      <h1>Serviços Disponíveis</h1>
      <p>Escolha entre uma variedade de serviços projetados para facilitar sua vida.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Link href="/json-formatter" prefetch={true}>
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <div className="space-y-2 text-center">
                <h1 className="text-2xl font-bold">Formatar JSON</h1>
                <p className="text-sm text-muted-foreground">Formate seus dados JSON em um formato mais legível.</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/cpf-generator" prefetch={true}>
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <div className="space-y-2 text-center">
                <h1 className="text-2xl font-bold">Gerador de CPF</h1>
                <p className="text-sm text-muted-foreground">Gerador de CPF aleatório.</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/cnpj-generator" prefetch={true}>
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <div className="space-y-2 text-center">
                <h1 className="text-2xl font-bold">Gerador de CNPJ</h1>
                <p className="text-sm text-muted-foreground">Gerador de CNPJ aleatório.</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/apis" prefetch={true}>
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <div className="space-y-2 text-center">
                <h1 className="text-2xl font-bold">APIS</h1>
                <p className="text-sm text-muted-foreground">Consumir APIS gratuitas.</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}

export default page
