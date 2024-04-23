import type { APIRoute } from "astro";
import { db, like, Publicaciones } from "astro:db";

export const prerender = false;

export const GET: APIRoute = async (parametros) => {
  /* const urlSearchParams = new URLSearchParams("?" + request.url.split("?")[1]);
  const params = Object.fromEntries(urlSearchParams.entries()); */

  console.log(parametros);

  const { colab } = parametros.params;

  const res = await db
    .select()
    .from(Publicaciones)
    .where(like(Publicaciones.autores, `%${colab}%`));

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
