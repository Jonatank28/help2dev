import Content from './components/Content'

export const metadata = {
  title: 'Generate CPF',
  description: 'Generate a valid and random CPF',
}

const PageGenerateCPF = () => {
  return (
    <main className="h-[calc(100vh-52px)] flex justify-center items-center">
      <Content />
    </main>
  )
}

export default PageGenerateCPF
