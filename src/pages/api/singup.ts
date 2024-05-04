import type { APIRoute } from "astro";
import { generateId } from "lucia";
import { Argon2id } from "oslo/password";
import { db, Usuario } from "astro:db";
import { lucia } from "../../auth";

export const prerender = false;

export const GET: APIRoute = async ({ request, cookies }) => {
  try {
    const res = await db.select().from(Usuario);

    return new Response(JSON.stringify(res), {
      status: 201,
      statusText: "Usuario creado",
    });
  } catch (error) {
    return new Response(null, {
      status: 404,
      statusText: "Error al crear usuario",
    });
  }
};

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const formData = await request.json();
    console.log(formData);

    const { user, password } = formData;

    const userId = generateId(15);
    const hashedPassword = await new Argon2id().hash(password);

    await db
      .insert(Usuario)
      .values([{ id: userId, user, password: hashedPassword }]);

    // Generate session
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    return new Response(JSON.stringify({ msg: "Correcto" }), {
      status: 201,
      statusText: "Usuario creado",
    });
  } catch (error) {
    return new Response(null, {
      status: 404,
      statusText: "Error al crear usuario",
    });
  }
};
