import { movies } from '@/data/movies'

export async function GET() {
  return new Response(JSON.stringify(movies), {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}