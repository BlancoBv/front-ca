/* import type { APIRoute } from "astro";
import { and, db, eq, Usuario } from "astro:db";

export const prerender = false;

export const POST: APIRoute = async (context) => {
  const formData = await context.request.json();
  const { user, password } = formData;
  const res = await db
    .select()
    .from(Usuario)
    .where(
      and(eq(Usuario.user, `${user}`), eq(Usuario.password, `${password}`))
    );

  if (!res || res.length === 0) {
    return new Response(
      JSON.stringify({ msg: "Contraseña o usuario incorrecto" }),
      {
        status: 404,
        statusText: "Contraseña o usuario incorrecto",
      }
    );
  }

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  context.cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return new Response(JSON.stringify(res), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
 */
