'use client'

import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <html lang="en">
      <body
        className="min-h-screen w-screen bg-background flex items-center justify-center"
        style={{ fontFamily: 'Inter' }}
      >
        <Card className="max-w-md p-6 rounded-lg shadow-md  overflow-hidden">
          <h1 className="text-3xl font-bold text-center mb-4 tracking-tight">
            Page not found
          </h1>
          <p className="text-lg opacity-60 text-center mb-4">
            The page you are looking for does not exist.
          </p>
          <div className="flex items-center justify-center">
            <a
              onClick={() => router.push('/')}
              className="inline-flex items-center cursor-pointer px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-colors duration-300"
            >
              Go back to home
            </a>
          </div>
        </Card>
      </body>
    </html>
  )
}
