import { db, Banners } from "astro:db";

export const prerender = false;

export async function GET() {
  const res = await db.select().from(Banners);

  if (!res) {
    return new Response(null, {
      status: 404,
      statusText: "No Encontrado",
    });
  }

  return new Response(JSON.stringify(res), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
