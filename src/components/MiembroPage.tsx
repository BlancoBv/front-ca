import type { FC } from "react";
import useFetchData from "../hooks/useFetchData";
import Img from "./Img";
import Tablespersonal from "./Tablespersonal.astro";

const MiembroPage: FC<{ id: string | undefined }> = ({ id }) => {
  const { data, isPending, error } = useFetchData("/configs/members.json");

  return (
    <section className="flex flex-col px-40">
      {isPending && <div>Cargando...</div>}
      {!isPending && !error && <Success data={data} id={id} />}
    </section>
  );
};

const Success: FC<{ data: any; id: any }> = ({ data, id }) => {
  const filteredMember: {
    nombre: string;
    resumen: string;
    img: string;
    puesto: string;
  } = data.filter((el: any) => el.id === Number(id))[0];
  console.log(filteredMember);
  return (
    <>
      <div className="flex w-full h-28 items-center justify-between">
        <h1>{filteredMember.nombre}</h1>
        <ul className="list-none flex">
          <li>
            <a href="#">Home</a>
          </li>
          <li>Lider CA</li>
        </ul>
      </div>
      <div className="flex">
        <Img
          source={filteredMember.img}
          alt={filteredMember.nombre}
          styles="size-40 rounded-lg"
        />
        <div className="flex flex-col w-3/4 pl-8 space-y-4">
          <div className="flex flex-col border-b-2 border-b-gray-300 py-2">
            <h2 className="">{filteredMember.nombre}</h2>
            <h3 className="">{filteredMember.puesto}</h3>
          </div>
          <div className="flex flex-col border-b-2 border-b-gray-300 py-2">
            <a href="#" className="text-gray-500 hover:text-blue-500">
              CORREO@CORREO.COM
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500">
              CORREO@CORREO.COM
            </a>
          </div>
          <div className="flex">
            <p className="text-justify flex-grow p-1">
              {filteredMember.resumen}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MiembroPage;
