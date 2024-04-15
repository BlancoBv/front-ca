import type { APIRoute } from "astro";
import { db, Banners, eq } from "astro:db";

export const prerender = false;

export const PUT: APIRoute = async ({ request, params }) => {
  const body = await request.json();
  const { id } = params;

  const { title, description, img } = body;

  const res = await db
    .update(Banners)
    .set({
      title,
      description,
      img,
    })
    .where(eq(Banners.id, Number(id)));

  return new Response(JSON.stringify(res), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const DELETE: APIRoute = async ({ params }) => {
  const { id } = params;

  const res = await db.delete(Banners).where(eq(Banners.id, Number(id)));

  return new Response(JSON.stringify(res), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
