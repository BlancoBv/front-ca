import { getPaginatedPost } from "../../../../utils/prismicFetch";

export const prerender = false;

export async function GET({ params }: any) {
  const { page } = params;
  try {
    const res = await getPaginatedPost(Number(page));
    return new Response(JSON.stringify(res), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(null, {
      status: 404,
      statusText: "No Encontrado",
    });
  }
}
