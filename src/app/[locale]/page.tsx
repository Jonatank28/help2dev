import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl";
import Link from "next/link"

const page = () => {
  const t = useTranslations("Home");
  return (
    <div className="defaultWidth">
      <div className="h-full">
        <h1 className="text-5xl font-bold pt-10">{t("title")}</h1>
        <p className="pt-2">{t("description")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-12">
          <Link href="/json-formatter" prefetch={true}>
            <Card className="shadow-xl hover:bg-accent/40 transition-all">
              <CardContent className="flex items-center justify-center p-14">
                <div className="space-y-2 text-center">
                  <h1 className="text-2xl font-bold">{t("cards.json-formatter.title")}</h1>
                  <p className="text-sm text-muted-foreground">{t("cards.json-formatter.description")}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/cpf-generator" prefetch={true}>
            <Card className="shadow-xl hover:bg-accent/40 transition-all">
              <CardContent className="flex items-center justify-center p-14">
                <div className="space-y-2 text-center">
                  <h1 className="text-2xl font-bold">{t("cards.cpf-generator.title")}</h1>
                  <p className="text-sm text-muted-foreground">{t("cards.cpf-generator.description")}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/cnpj-generator" prefetch={true}>
            <Card className="shadow-xl hover:bg-accent/40 transition-all">
              <CardContent className="flex items-center justify-center p-14">
                <div className="space-y-2 text-center">
                  <h1 className="text-2xl font-bold">{t("cards.cnpj-generator.title")}</h1>
                  <p className="text-sm text-muted-foreground">{t("cards.cnpj-generator.description")}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/apis" prefetch={true}>
            <Card className="shadow-xl hover:bg-accent/40 transition-all">
              <CardContent className="flex items-center justify-center p-14">
                <div className="space-y-2 text-center">
                  <h1 className="text-2xl font-bold">{t("cards.apis.title")}</h1>
                  <p className="text-sm text-muted-foreground">{t("cards.apis.description")}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page
