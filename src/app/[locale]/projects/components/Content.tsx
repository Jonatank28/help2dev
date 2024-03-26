import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Link } from "@/navigation"
import { getLocale } from 'next-intl/server'
import { projects } from "../data/projects"
import { limitedText } from "@/lib/utils"


const Content = async () => {
  const locale = await getLocale()

  return (
    <div className="widthDefault mt-8">
      <h1 className="text-3xl font-bold mb-4">{locale === 'en' ? 'Projects' : locale === 'es' ? 'Proyectos' : 'Projetos'}</h1>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {
          projects.map((project, index) => (
            <Card key={index} className="bg-secondary/90 transition-all hover:bg-secondary/100">
              <Link href={`/projects/${project.titlePath}`}>
                <CardHeader>
                  <h1 className="text-xl font-medium">{project.title}</h1>
                </CardHeader>
                <CardContent>
                  {locale && project.description.hasOwnProperty(locale) && (
                    <p>{limitedText(project.description[locale as keyof typeof project.description], 140)}</p>
                  )}

                </CardContent>
              </Link>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default Content
