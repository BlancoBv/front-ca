import type { APIRoute } from "astro";
import { db, SubMenuAzul, eq } from "astro:db";

export const prerender = false;

export const PUT: APIRoute = async ({ request, params }) => {
  const body = await request.json();
  const { id } = params;

  const { nombre, menu, url } = body;

  const res = await db
    .update(SubMenuAzul)
    .set({
      nombre,
      menu,
      url,
    })
    .where(eq(SubMenuAzul.id, Number(id)));

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
    .delete(SubMenuAzul)
    .where(eq(SubMenuAzul.id, Number(id)));

  return new Response(JSON.stringify(res), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
