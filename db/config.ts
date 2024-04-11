import { defineDb, defineTable, column, NOW } from "astro:db";

const Miembros = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    nombre: column.text(),
    apepat: column.text(),
    apemat: column.text(),
    puesto: column.text({ optional: true }),
    grado: column.text({ optional: true }),
    img: column.text({ default: "img" }),
    resumen: column.text({ optional: true }),
    bio: column.text({ optional: true }),
    contacto: column.json({
      default: {
        redes: [],
        contactos: [],
      },
    }),
    createdAt: column.date({ default: NOW }),
  },
});

const Banners = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    url: column.text(),
    title: column.text({ optional: true }),
    description: column.text({ optional: true }),
    createdAt: column.date({ default: NOW }),
  },
});

const MenuAzul = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    nombre: column.text(),
    url: column.text(),
    createdAt: column.date({ default: NOW }),
  },
});

const SubMenuAzul = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    nombre: column.text(),
    menu: column.number({ references: () => MenuAzul.columns.id }),
    url: column.text(),
    createdAt: column.date({ default: NOW }),
  },
});

const MenuSuperior = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    nombre: column.text(),
    enlace: column.text(),
    createdAt: column.date({ default: NOW }),
  },
});

const RedesSociales = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    nombre: column.text(),
    sigla: column.text(),
    createdAt: column.date({ default: NOW }),
  },
});

const Usuario = defineTable({
  columns: {
    user: column.text({ primaryKey: true }),
    nombre: column.text(),
    password: column.text(),
    rol: column.text(),
    createdAt: column.date({ default: NOW }),
  },
});

const Proyectos = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    clave: column.text({ optional: true }),
    proyecto: column.text(),
    duracion: column.text(),
    director: column.text(),
    colaboradores: column.text(),
    tipo: column.text(),
    vigencia: column.json({
      default: { fechaI: "", fechaF: "" },
      optional: true,
    }),
    status: column.text({ default: "No-terminado" }),
    descripcion: column.text(),
    url: column.text(),
    createdAt: column.date({ default: NOW }),
  },
});

const Publicaciones = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    ISSN: column.text({ optional: true }),
    articulo: column.text(),
    autores: column.text(),
    tipo: column.text(),
    anio: column.text(),
    descripcion: column.text(),
    url: column.text(),
    createdAt: column.date({ default: NOW }),
  },
});

export default defineDb({
  tables: {
    Miembros,
    Banners,
    Usuario,
    MenuAzul,
    SubMenuAzul,
    MenuSuperior,
    RedesSociales,
    Proyectos,
    Publicaciones,
  },
});
