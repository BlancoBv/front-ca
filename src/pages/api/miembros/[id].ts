// import { getProduct } from "../db";

import { db, eq, Miembros } from "astro:db";

export const prerender = false;

export async function GET({ params }: any) {
  const id = params.id;
  console.log(id);

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
