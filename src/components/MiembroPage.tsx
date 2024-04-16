import type { FC } from "react";
import useFetchData from "../hooks/useFetchData";
import Img from "./Img";

const MiembroPage: FC<{ id: string | undefined }> = ({ id }) => {
  const { data, isPending, error } = useFetchData("/configs/members.json");

  return (
    <section className=" flex mx-32 my-12 max-sm:">
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
      <div className="flex w-screen flex-col sm:flex-row">
        <Img
          source={filteredMember.img}
          alt={filteredMember.nombre}
          styles="size-40 object-cover rounded-lg max-sm:size-60 max-sm:justify-center"
        />
        <div className="flex flex-col pl-8 space-y-4">
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
            <p className="text-justify w-full">{filteredMember.resumen}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MiembroPage;
