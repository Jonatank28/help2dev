import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Link } from "@/navigation"


const Content = () => {
  return (
    <div className="widthDefault">
      <h1 className="text-3xl font-bold mb-4">Projetos</h1>
      <div className="grid grid-cols-1 md:grid-cols-6">
        <Card className="bg-secondary">
          <Link href="/projects/next-auth/login">
            <CardHeader>
              <h1 className="text-xl font-medium">Next auth</h1>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nihil veniam, excepturi eos, reprehenderit adipisci unde molestiae distinctio voluptatum iure odio tempore et! Ipsum autem maxime sequi voluptas. Quos, incidunt.</p>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  )
}

export default Content
