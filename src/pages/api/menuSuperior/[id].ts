import type { APIRoute } from "astro";
import { db, MenuSuperior, eq } from "astro:db";

export const prerender = false;

export const PUT: APIRoute = async ({ request, params }) => {
  const body = await request.json();
  const { id } = params;

  const { nombre, enlace } = body;

  const res = await db
    .update(MenuSuperior)
    .set({
      nombre,
      enlace,
    })
    .where(eq(MenuSuperior.id, Number(id)));

  return new Response(JSON.stringify(res), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const DELETE: APIRoute = async ({ params }) => {
  const { id } = params;

  const res = await db
    .delete(MenuSuperior)
    .where(eq(MenuSuperior.id, Number(id)));

  return new Response(JSON.stringify(res), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
