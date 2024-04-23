import type { APIRoute } from "astro";
import { db, MenuAzul, eq } from "astro:db";

export const prerender = false;

export const PUT: APIRoute = async ({ request, params }) => {
  const body = await request.json();
  const { id } = params;

  const { nombre, url } = body;

  const res = await db
    .update(MenuAzul)
    .set({
      nombre,
      url,
    })
    .where(eq(MenuAzul.id, Number(id)));

  return new Response(JSON.stringify(res), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const DELETE: APIRoute = async ({ params }) => {
  const { id } = params;

  const res = await db.delete(MenuAzul).where(eq(MenuAzul.id, Number(id)));

  return new Response(JSON.stringify(res), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
