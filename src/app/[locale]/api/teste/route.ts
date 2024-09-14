import { movies } from "@/data/movies";

export async function GET(request: Request) {
  return new Response(JSON.stringify(movies), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}
