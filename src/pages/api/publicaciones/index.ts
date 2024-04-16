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

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const { ISSN, articulo, autores, tipo, anio, descripcion, url } = body;

  const res = await db.insert(Publicaciones).values({
    ISSN,
    articulo,
    autores,
    tipo,
    anio,
    descripcion,
    url,
  });

  return new Response(JSON.stringify(res), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
