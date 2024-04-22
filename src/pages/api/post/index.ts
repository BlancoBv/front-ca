import { getPost } from "../../../utils/prismicFetch";

export const prerender = false;

export async function GET() {
  try {
    const res = await getPost();
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
