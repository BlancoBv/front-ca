import type { APIRoute } from "astro";
import { db, eq, Miembros } from "astro:db";

export const prerender = false;

export async function GET({ params }: any) {
  const id = params.id;

  const res = await db
    .selectDistinct()
    .from(Miembros)
    .where(eq(Miembros.id, id));

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

export const PUT: APIRoute = async ({ request, params }) => {
  const body = await request.json();

  const { id } = params;

  const { nombre, apepat, apemat, puesto, grado, resumen, bio, contacto } =
    body;

  const res = await db
    .update(Miembros)
    .set({
      nombre,
      apepat,
      apemat,
      puesto,
      grado,
      resumen,
      bio,
      contacto,
    })
    .where(eq(Miembros.id, Number(id)));

  return new Response(JSON.stringify(res));
};

export const DELETE: APIRoute = async ({ params }) => {
  const id = params.id;

  const res = await db.delete(Miembros).where(eq(Miembros.id, Number(id)));

  return new Response(JSON.stringify(res));
};
