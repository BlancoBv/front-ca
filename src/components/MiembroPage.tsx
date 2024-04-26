import type { FC } from "react";
import Img from "./Img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import useGetData from "../hooks/useGetData";
import Tablespersonal from "./Tablespersonal";

const MiembroPage: FC<{
  id: string | undefined;
  datos: {
    id: number;
    nombre: string;
    img: string;
    apepat: string;
    apemat: string;
    puesto: string | null;
    resumen: string | null;
    bio: string | null;
    contacto: any;
  };
}> = ({ id, datos }) => {
  const publicaciones = useGetData(
    `/publicaciones/colaboradores/${datos.nombre.split(" ")[0].toLowerCase()}`
  );
  const proyectos = useGetData(
    `/proyectos/colaboradores/${datos.nombre.split(" ")[0].toLowerCase()}`
  );

  const columnasProyectos = [
    { name: "Clave", selector: (row: any) => row.clave },
    { name: "Proyecto", selector: (row: any) => row.proyecto },
    { name: "Duración", selector: (row: any) => row.duracion },
    { name: "Director", selector: (row: any) => row.director },
    { name: "Colaboradores", selector: (row: any) => row.colaboradores },
    { name: "Tipo", selector: (row: any) => row.tipo },
  ];
  const columnasPublicaciones = [
    { name: "Clave", selector: (row: any) => row.ISSN },
    { name: "Artículo", selector: (row: any) => row.articulo },
    { name: "Año", selector: (row: any) => row.anio },
    { name: "Descripción", selector: (row: any) => row.descripcion },
    { name: "Autores", selector: (row: any) => row.autores },
    { name: "Tipo", selector: (row: any) => row.tipo },
  ];

  return (
    <section className=" flex flex-col w-screen py-10 px-6 sm:px-40">
      <div className="flex justify-center flex-col sm:flex-row">
        <Img
          source={datos.img}
          alt={datos.nombre}
          styles="size-70 rounded-lg sm:size-40"
        />
        <div className="flex flex-col sm:pl-8">
          <div className="flex flex-col border-b-2 border-b-gray-300 py-3">
            <h5 className="">{`${datos.nombre} ${datos.apepat} ${datos.apemat}`}</h5>
            <h6 className="">{datos.puesto}</h6>
          </div>
          <div className="flex flex-col border-b-2 border-b-gray-300 py-3">
            {datos.contacto.hasOwnProperty("contactos") &&
              datos.contacto.contactos.map((el: string) => (
                <a
                  href={`mailto:${el}`}
                  className="text-gray-500 hover:text-blue-500"
                  key={el}
                >
                  {el}
                </a>
              ))}
          </div>
          <div className="flex py-3">
            <p className="text-justify">{datos.resumen}</p>
          </div>
          <div className=" flex space-x-5">
            <a href="">
              <FontAwesomeIcon
                className=" 
                size-9
                "
                icon={faFacebook}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                className=" 
                size-9
                "
                icon={faXTwitter}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                className=" 
                size-9
                "
                icon={faLinkedin}
              />
            </a>
          </div>
          <div className="flex py-3">
            <p className="text-justify">{datos.bio}</p>
          </div>
        </div>
      </div>
      {!proyectos.isPending && (
        <Tablespersonal
          titulo="Proyectos"
          columnas={columnasProyectos}
          datos={proyectos.data}
        />
      )}
      {!publicaciones.isPending && (
        <Tablespersonal
          titulo="Publicaciones"
          columnas={columnasPublicaciones}
          datos={publicaciones.data}
        />
      )}
    </section>
  );
};

export default MiembroPage;
