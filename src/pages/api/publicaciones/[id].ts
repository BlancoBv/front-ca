import type { APIRoute } from "astro";
import { db, eq, like, Publicaciones } from "astro:db";

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const id = params.id;

  const res = await db
    .select()
    .from(Publicaciones)
    .where(eq(Publicaciones.id, Number(id)));

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
