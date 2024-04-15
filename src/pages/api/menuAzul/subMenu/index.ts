import type { APIRoute } from "astro";
import { db, eq, SubMenuAzul } from "astro:db";

export const prerender = false;

export const GET: APIRoute = async () => {
  const res = await db.selectDistinct().from(SubMenuAzul);

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

  const { nombre, url, menu } = body;

  const res = await db.insert(SubMenuAzul).values({ nombre, url, menu });

  return new Response(JSON.stringify(res), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
