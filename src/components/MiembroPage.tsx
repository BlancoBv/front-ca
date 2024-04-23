import type { FC } from "react";
import useFetchData from "../hooks/useFetchData";
import Img from "./Img";

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
  };
}> = ({ id, datos }) => {
  return (
    <section className=" flex flex-row sm:flex-col w-screen py-10 px-6 sm:px-40">
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
            <a href="#" className="text-gray-500 hover:text-blue-500">
              CORREO@CORREO.COM
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500">
              CORREO@CORREO.COM
            </a>
          </div>
          <div className="flex py-3">
            <p className="text-justify">{datos.resumen}</p>
          </div>
          <div>
            <h1>aqui van las redes sociales</h1>
          </div>
          <div className="flex py-3">
            <p className="text-justify">{datos.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiembroPage;
