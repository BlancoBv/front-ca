import type { APIRoute } from "astro";
import { db, eq, MenuAzul, SubMenuAzul } from "astro:db";

export const prerender = false;

export async function GET() {
  const res = await db.selectDistinct().from(MenuAzul);
  const data = [];

  if (!res) {
    return new Response(null, {
      status: 404,
      statusText: "No Encontrado",
    });
  }
  for (let i = 0; i < res.length; i++) {
    const SubMenus = await db
      .select()
      .from(SubMenuAzul)
      .where(eq(SubMenuAzul.menu, res[i].id));
    data.push({ ...res[i], SubMenus });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const { nombre, url } = body;

  const res = await db.insert(MenuAzul).values({ nombre, url });

  return new Response(JSON.stringify(res), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
