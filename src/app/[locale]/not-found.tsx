import { Card } from '@/components/ui/card'
import { Link } from '@/navigation'
import { getTranslations } from 'next-intl/server'

export default async function NotFoundPage() {
  const t = await getTranslations('NotFoundPage')

  return (
    <main className="min-h-screen w-screen bg-background flex items-center justify-center">
      <Card className="max-w-md p-6 rounded-lg shadow-md  overflow-hidden">
        <h1 className="text-3xl font-bold text-center mb-4 tracking-tight">
          {t('title')}
        </h1>
        <p className="text-lg opacity-60 text-center mb-4">
          {t('description')}
        </p>
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-colors duration-300"
          >
            {t('link')}
          </Link>
        </div>
      </Card>
    </main>
  )
}
