import type { APIRoute } from "astro";
import { db, MenuSuperior } from "astro:db";

export const prerender = false;

export async function GET() {
  const res = await db.select().from(MenuSuperior);

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

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const { nombre, enlace } = body;

  const res = await db.insert(MenuSuperior).values({ nombre, enlace });

  return new Response(JSON.stringify(res), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
