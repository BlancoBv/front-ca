import {
  Banners,
  db,
  MenuAzul,
  MenuSuperior,
  Miembros,
  RedesSociales,
  SubMenuAzul,
  Proyectos,
  Publicaciones,
} from "astro:db";

//Todos estos datos son de prueba, los datos reales son cuando el proyecto se compila y se conecta a astro studio db con mi usuario de github jlcabrera02

export default async function seed() {
  //Insertar miembros
  await db.insert(Miembros).values([
    {
      id: 1,
      nombre: "Fernando",
      apepat: "Pech",
      apemat: "May",
      puesto: "Profesora-investigadora",
      grado: "Dr",
      img: "/img/miembros/2.jpg",
      resumen:
        "Profesor investigador del Instituto Tecnológico Superior de los Ríos. Realizó sus estudios de Maestría en el Centro de Investigación y estudios Avanzados del IPN (CINVESTAV) en el área de Inteligencia Artificial. Se especializó en Web Semántica en la Universidad de Chile. Finalizó su Doctorado en Ciencias de la Computación en el Centro Nacional de Investigación y Desarrollo Tecnológico.",
      bio: null,
      contacto: {
        redes: [{ plataforma: "facebook", url: "facebook/pechmay" }],
        contactos: ["Fernando@cinves"],
      },
    },
    {
      id: 2,
      nombre: "Edna Mariel",
      apepat: "Mil",
      apemat: "Chontal",
      puesto: "Profesora-investigadora",
      grado: "MC",
      img: "/img/miembros/4.jpg",
      resumen:
        "Cuenta con una Maestría en Ciencias en la Computación por el Centro de Investigación y de Estudios Avanzados del IPN, campus Tamaulipas, una Licenciatura en Computación por la Universidad Autónoma de Tabasco.",
      bio: "Es profesora e Investigadora del Tecnológico Nacional de México, Campus Los Ríos, pertenece al Cuerpo Académico “Cómputo Distribuido” en el mismo Instituto desde el 2012, en donde ha participado en diversos proyectos de Investigación Científicos. Sus áreas de interés son: Sistemas Distribuidos, Procesamiento de Lenguaje Natural y Redes de Próxima Generación. Actualmente es miembro del Sistema Estatal de Investigadores. ",
      contacto: [
        {
          redes: [{ plataforma: "facebook", url: "facebook/marielchontal" }],
          contactos: ["Edna@cinves"],
        },
      ],
    },
    {
      id: 3,
      nombre: "Jorge",
      puesto: "Profesor-investigador",
      apepat: "Magana",
      apemat: "Govea",
      img: "/img/miembros/3.jpg",
      grado: "MATI",
      resumen:
        "Maestro en Administración de Tecnologías de la Información por la Universidad Juárez Autónoma de Tabasco e Ingeniero en Sistemas Computacionales por el Instituto Tenológico de Mérida. Profesor Investigador de la carrera de Ingeniería en Sistemas Computacionales del Instituto Tecnológico Superior de los Ríos en las líneas de investigación de Bases de datos y Cómputo Distribuido. ",
      bio: "Miembro del Cuerpo Académico de Cómputo Distribuido con estatus en formación. Ha participado en proyectos de Investigación con financiamiento PRODEP orientadas al desarrollo de Ontologías para el sector Agrícola. Sus intereses de investigación incluyen la Ingeniería de Software y la Web Semántica. Es miembro del Padrón Estatal de Investigadores de Tabasco. Se ha involucrado en proyectos de carácter social en la ciudad de Bernkastel Kues, Alemania.",
      contacto: [],
    },
    {
      id: 4,
      nombre: "Luis Antonio",
      apepat: "Lopez",
      apemat: "Gomez",
      puesto: "Profesor-investigador",
      img: "/img/miembros/1.jpg",
      grado: "ING",
      resumen:
        "Profesor-investigador del TecNM Campus de los Ríos. Miembro del cuerpo académico computo distribuido. Acredita numerosas contribuciones a congresos y participaciones el desarrollo de proyectos de investigación de PRODEP y TecNM. Publicación de 10 artículos nacionales e internacionales, artículos indexados en revistasde prestigio. ",
      bio: "",
      contacto: [],
    },
  ]);

  //Insertar MenuAzul
  await db.insert(MenuAzul).values([
    { id: 1, nombre: "Inicio", url: "" },
    { id: 2, nombre: "Cuerpo acádemico", url: "cuerpo-academico" },
    { id: 3, nombre: "Miembros", url: "miembros" },
    { id: 4, nombre: "Iniciar sesión", url: "login" },
    { id: 5, nombre: "API prismic", url: "post/ZiLCbRAAACxXR1Ey" },
  ]);

  //Insertar SubmenuAzul
  await db.insert(SubMenuAzul).values([
    { id: 1, nombre: "Datos Generales", url: "datos-generales", menu: 2 },
    {
      id: 2,
      nombre: "Lineas de generación y aplicacion del conocimiento",
      url: "lineas-conocimiento",
      menu: 2,
    },
    {
      id: 3,
      nombre: "Lineas de investigación",
      url: "lineas-investigación",
      menu: 2,
    },
    { id: 4, nombre: "Fernando Pech May", url: "1", menu: 3 },
    { id: 5, nombre: "Edna Mariel Mil Chontal", url: "2", menu: 3 },
    { id: 6, nombre: "Jorge Magaña Govea", url: "3", menu: 3 },
    { id: 7, nombre: "Luis Antonio Lopez Gomez", url: "4", menu: 3 },
  ]);

  //Insertar Menu Superior
  await db.insert(MenuSuperior).values([
    { id: 1, nombre: "Tecnm Campus rios", enlace: "https//rios.tecnm.mx" },
    {
      id: 2,
      nombre: "Recursos",
      enlace: "https://lawebdelprofesor.com.mx/CA/inicio#",
    },
    {
      id: 3,
      nombre: "Blog",
      enlace: "https://lawebdelprofesor.com.mx/CA/inicio#",
    },
    {
      id: 4,
      nombre: "Portafolios",
      enlace: "https://lawebdelprofesor.com.mx/CA/inicio#",
    },
  ]);

  //Insertar Banners
  await db.insert(Banners).values([
    {
      id: 1,
      img: "img/banners/1.jpg",
      title: "Mision",
      description:
        "Contribuir con el mejoramiento de la formación académica de los estudiantes de la carrera de Ingeniería en Sistemas computacionales del Instituto tecnológico Superior de los Ríos.",
    },
    {
      id: 2,
      img: "img/banners/2.jpg",
      title: "Vision",
      description:
        "Lograr la consolidación del cuerpo académico a través del incremento de nuestra producción académica, investigación con reconocimiento nacional e internacional.",
    },
    {
      id: 3,
      img: "img/banners/3.jpg",
      title: "Objetivo",
      description:
        "Desarrollar un cuerpo académico para el desarrollo de proyectos de investigación, dirección de tesís, desarrollo de aplicación de sistema distribuido, así como el mejoramiento de los planes de estudios de la carrera.",
    },
  ]);

  await db.insert(RedesSociales).values([
    { nombre: "Facebook", sigla: "Fb" },
    { nombre: "Instagram", sigla: "Ing" },
    { nombre: "Tiktok", sigla: "Tk" },
    { nombre: "LinkedIn", sigla: "Li" },
  ]);

  await db.insert(Publicaciones).values([
    {
      ISSN: null,
      articulo:
        "Analisis de mineria de datos y Machine Learning en Marketing Digital",
      autores:
        "Pedro Arcos Mendez, Edna M, Luis Antonio Lopez Gomez, Fernando Pech May",
      tipo: "Memorias en extenso",
      anio: "2019",
      descripcion: "breve",
      url: "https://repositorio.esan.edu.pe/items/70ee69e1-03af-4314-9adb-b902c1c45461",
    },
    {
      ISSN: "18704069",
      articulo:
        "Land use classication from Sentinel-2 imagery and Google Earth Engine",
      autores:
        "Fernando Pech May, Honorio Guadalupe Sanchez Jacinto, Jorge Magaña Govea y german Rios Toledo",
      tipo: "Indexado",
      anio: "2020",
      descripcion: "Indexado",
      url: "https://repositorio.esan.edu.pe/items/70ee69e1-03af-4314-9adb-b902c1c45461",
    },
    {
      ISSN: "1870-4069",
      articulo:
        "Análisis de las emisiones de NO2, durante la jornada Nacioanl de sana distancia, mediante imagenes satelitales",
      autores:
        "Sánchez Hernandez, J.V., Pech-May, F., vera-priego, F., & de la O hidalgo, D.S",
      tipo: "Arbitrado",
      anio: "2021",
      descripcion: "breve",
      url: "https://repositorio.esan.edu.pe/items/70ee69e1-03af-4314-9adb-b902c1c45461",
    },
    {
      ISSN: "null",
      articulo:
        "Análisis de las emisiones de NO2, durante la jornada Nacioanl de sana distancia, mediante imagenes satelitales",
      autores:
        "Sánchez Hernandez, J.V., Pech-May, F., vera-priego, F., & de la O hidalgo, D.S",
      tipo: "Arbitrado",
      anio: "2021",
      descripcion: "breve",
      url: "https://repositorio.esan.edu.pe/items/70ee69e1-03af-4314-9adb-b902c1c45461",
    },
  ]);

  await db.insert(Proyectos).values([
    {
      clave: null,
      proyecto: "Integridad de los enlaces de datos en la web semantica",
      duracion: "12 de agosto 2013 al 30 de septiembre del 2016",
      director: "Dr. Fernando Pech May",
      colaboradores:
        "Jorge Magaña Govea, Luis Antonio López Gómez, Manuel Segovia López, Luis Alberto de la Cruz Diaz, Edna Mariel Milchontal",
      tipo: "Externo",
      status: "no-terminado",
      vigencia: {
        fechaI: "2023-12-12",
        fechaF: "2024-12-12",
      },
      descripcion: "breve",
      url: "https://repositorio.esan.edu.pe/items/70ee69e1-03af-4314-9adb-b902c1c45461",
    },
    {
      clave: "5667.1 9-P",
      proyecto:
        "Análisis y desarrollo de ontología para el fortalecimiento del sector agricola",
      duracion: "01 de enero al 37 de de diciembre del 2019",
      director: "Dr Fernando Pech May",
      colaboradores:
        "Manuel Segovia López, Edna Mariel Mil Chontal, Jorge Magaña Govea, Luis Antonio López Gómez",
      tipo: "Externo",
      status: "no-terminado",
      vigencia: {
        fechaI: "2023-12-12",
        fechaF: "2024-12-12",
      },
      descripcion: "breve",
      url: "https://repositorio.esan.edu.pe/items/70ee69e1-03af-4314-9adb-b902c1c45461",
    },
    {
      clave: "SPI-04-2021",
      proyecto:
        "Detección de inundaciones mediante imágenes multiespectrales y aprendizaje profundo.",
      duracion: "08 de Febrero de 2021 al 18 de Marzo de 2022",
      director: "Dr. Fernando Pech May",
      colaboradores: "Ing. Luis Antonio López Gómez, MATI. Jorge Magaña Govea",
      tipo: "Interno",
      status: "terminado",
      vigencia: {
        fechaI: "2023-12-12",
        fechaF: "2024-12-12",
      },
      descripcion: "breve",
      url: "https://repositorio.esan.edu.pe/items/70ee69e1-03af-4314-9adb-b902c1c45461",
    },
    {
      clave: "SPI-03-2020",
      proyecto:
        "Análisis de algoritmo de similitud semántica mediante el uso de ontologías.",
      duracion: "Enero 2019 - Diciembre 2020",
      director: "Dr. Fernando Pech May",
      colaboradores: "Ing. Luis Antonio López Gómez",
      tipo: "Interno",
      status: "terminado",
      vigencia: {
        fechaI: "2023-12-12",
        fechaF: "2024-12-12",
      },
      descripcion: "breve",
      url: "https://repositorio.esan.edu.pe/items/70ee69e1-03af-4314-9adb-b902c1c45461",
    },
  ]);
}
