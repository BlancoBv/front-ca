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

export const PUT: APIRoute = async ({ request, params }) => {
  const body = await request.json();

  const { id } = params;

  const { ISSN, articulo, autores, tipo, anio, descripcion, url } = body;

  const res = await db
    .update(Publicaciones)
    .set({
      ISSN,
      articulo,
      autores,
      tipo,
      anio,
      descripcion,
      url,
    })
    .where(eq(Publicaciones.id, Number(id)));

  return new Response(JSON.stringify(res));
};

export const DELETE: APIRoute = async ({ params }) => {
  const id = params.id;

  const res = await db
    .delete(Publicaciones)
    .where(eq(Publicaciones.id, Number(id)));

  return new Response(JSON.stringify(res));
};
