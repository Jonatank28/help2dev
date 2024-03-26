import { projects } from "../data/projects"
import Content from "./components/Content"



const PageProjectDetail = async ({ params: { slug } }: { params: { slug: string } }) => {
  const data = projects.find(project => project.id === Number(slug[0]))
  return (
    data && (
      <main>
        <Content data={data} />
      </main>
    )
  )
}

export default PageProjectDetail
