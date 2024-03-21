import Content from './components/Content'

export const metadata = {
  title: 'Generate CPF',
  description: 'Generate a valid and random CPF',
}

const PageGenerateCPF = () => {
  return (
    <main>
      <div className='h-[calc(100vh-121px)] flex justify-center items-center'>
        <Content />
      </div>
    </main>
  )
}

export default PageGenerateCPF
