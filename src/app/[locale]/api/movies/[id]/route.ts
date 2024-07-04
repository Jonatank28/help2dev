import { movies } from '@/data/movies'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id
  const movie = movies.find((movie) => movie.id === parseInt(id as string))

  return new Response(JSON.stringify(movie), {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}