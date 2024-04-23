import type { APIRoute } from "astro";
import { db, like, Proyectos } from "astro:db";

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const { titulo } = params;

  const res = await db
    .select()
    .from(Proyectos)
    .where(like(Proyectos.proyecto, `%${titulo}%`));

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
