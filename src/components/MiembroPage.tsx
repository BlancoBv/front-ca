import type { FC } from "react";
import useFetchData from "../hooks/useFetchData";
import Img from "./Img";

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
  const filteredMember: { nombre: string; resumen: string; img: string } =
    data.filter((el: any) => el.id === Number(id))[0];
  console.log(filteredMember);
  return (
    <>
      <h1>{filteredMember.nombre}</h1>
      <div className="flex flex-row w-full">
        <Img
          source={filteredMember.img}
          alt={filteredMember.nombre}
          styles="size-60"
        />
        <p className="text-justify flex-grow p-1">{filteredMember.resumen}</p>
      </div>
    </>
  );
};
export default MiembroPage;
