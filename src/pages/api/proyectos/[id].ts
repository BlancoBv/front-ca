import type { APIRoute } from "astro";
import { db, eq, Proyectos } from "astro:db";

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const id = params.id;

  const res = await db
    .select()
    .from(Proyectos)
    .where(eq(Proyectos.id, Number(id)));

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

  const {
    clave,
    proyecto,
    duracion,
    director,
    colaboradores,
    tipo,
    vigencia,
    status,
    descripcion,
    url,
  } = body;

  const res = await db
    .update(Proyectos)
    .set({
      clave,
      proyecto,
      duracion,
      director,
      colaboradores,
      tipo,
      vigencia,
      status,
      descripcion,
      url,
    })
    .where(eq(Proyectos.id, Number(id)));

  return new Response(JSON.stringify(res));
};

export const DELETE: APIRoute = async ({ params }) => {
  const id = params.id;

  const res = await db.delete(Proyectos).where(eq(Proyectos.id, Number(id)));

  return new Response(JSON.stringify(res));
};
