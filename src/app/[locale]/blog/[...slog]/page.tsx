const PageBlogDetail = ({ params }: any) => {
  const id = params.slog[0]

  return (
    <main>
      <div className="w-[min(1200px,95vw)] mx-auto">
        <h1 className="text-3xl font-bold">React: Componentes e Propriedades</h1>
      </div>
    </main>
  )
}

export default PageBlogDetail
