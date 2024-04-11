import type { APIRoute } from "astro";
import { db, Publicaciones } from "astro:db";

export const prerender = false;

export const GET: APIRoute = async () => {
  const res = await db.select().from(Publicaciones);

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
};
