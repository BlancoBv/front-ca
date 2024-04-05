import { db, RedesSociales } from "astro:db";

export async function GET() {
  const res = await db.select().from(RedesSociales);

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
