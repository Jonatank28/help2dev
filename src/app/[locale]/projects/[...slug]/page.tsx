import { redirect } from "next/navigation"
import { projects } from "../data/projects"
import Content from "./components/Content"



const PageProjectDetail = async ({ params: { slug } }: { params: { slug: string } }) => {
  const data = projects.find(project => project.titlePath === slug[0])
  if (!data) return redirect('/projects')
  return (
    data && (
      <main>
        <Content data={data} />
      </main>
    )
  )
}

export default PageProjectDetail
