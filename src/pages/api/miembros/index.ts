import type { APIRoute } from "astro";
import { db, Miembros } from "astro:db";

export const prerender = false;

export const GET: APIRoute = async () => {
  const res = await db.select().from(Miembros);

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

  const { nombre, apepat, apemat, puesto, grado, resumen, bio, contacto } =
    body;

  const res = await db.insert(Miembros).values({
    nombre,
    apepat,
    apemat,
    puesto,
    grado,
    resumen,
    bio,
    contacto,
  });

  return new Response(JSON.stringify(res), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
