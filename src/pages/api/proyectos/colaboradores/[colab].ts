import type { APIRoute } from "astro";
import { db, like, or, Proyectos } from "astro:db";

export const prerender = false;

export const GET: APIRoute = async (parametros) => {
  console.log(parametros);

  const { colab } = parametros.params;

  const res = await db
    .select()
    .from(Proyectos)
    .where(
      or(
        like(Proyectos.colaboradores, `%${colab}%`),
        like(Proyectos.director, `%${colab}%`)
      )
    );

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
