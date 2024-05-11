import { Lucia } from "lucia";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import { db, Session, Usuario } from "astro:db";
import { GitHub } from "arctic";
const adapter = new DrizzleSQLiteAdapter(db as any, Session, Usuario); // your adapter

export const prerender = false;

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: import.meta.env.PROD,
    },
  },
  getUserAttributes: (attributes) => {
    return {
      // attributes has the type of DatabaseUserAttributes
      rol: attributes.rol,
      username: attributes.username,
      apepat: attributes.apepat,
      apemat: attributes.apemat,
      nombres: attributes.nombres,
    };
  },
});

export const github = new GitHub(
  import.meta.env.GITHUB_CLIENT_ID,
  import.meta.env.GITHUB_CLIENT_SECRET
);

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}
interface DatabaseUserAttributes {
  username: string;
  rol: string;
  nombres: string;
  apepat: string;
  apemat: string;
}
