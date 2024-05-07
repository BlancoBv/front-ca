import { lucia } from "./auth";
import { verifyRequestOrigin } from "lucia";
import { defineMiddleware } from "astro:middleware";

export const prerender = false;

export const onRequest = defineMiddleware(async (context, next) => {
  const regExp = new RegExp(/\/panel.*/);
  if (regExp.test(context.request.url)) {
    const sessionId = context.cookies.get(lucia.sessionCookieName)?.value ?? "";

    const { session } = await lucia.validateSession(sessionId);

    if (!session) {
      return context.redirect("/404");
    }
  }

  if (context.request.method !== "GET") {
    const originHeader = context.request.headers.get("Origin");
    const hostHeader = context.request.headers.get("Host");
    if (
      !originHeader ||
      !hostHeader ||
      !verifyRequestOrigin(originHeader, [hostHeader])
    ) {
      return new Response(null, {
        status: 403,
      });
    }
  }

  const sessionId = context.cookies.get(lucia.sessionCookieName)?.value ?? null;
  if (!sessionId) {
    context.locals.user = null;
    context.locals.session = null;
    return next();
  }

  const { session, user } = await lucia.validateSession(sessionId);

  if (session && session.fresh) {
    const sessionCookie = lucia.createSessionCookie(session.id);
    context.cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  }
  if (!session) {
    const sessionCookie = lucia.createBlankSessionCookie();
    context.cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    return new Response(JSON.stringify({ msg: "No autorizado" }), {
      status: 403,
    });
  }
  context.locals.session = session;
  context.locals.user = user;
  return next();
});
