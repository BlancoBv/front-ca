import { getPostByID } from "../../../utils/prismicFetch";

export const prerender = false;

export async function GET({ params }: any) {
  const { uid } = params;

  try {
    const res = await getPostByID(uid);
    console.log(res);
    return new Response(JSON.stringify(res), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response(null, {
      status: 404,
      statusText: "No Encontrado",
    });
  }
}
