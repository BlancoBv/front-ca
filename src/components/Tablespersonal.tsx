import type { FC } from "react";
import useFetchData from "../hooks/useFetchData";

const Tablespersonal: FC<{ id: string | undefined }> = ({}) => {
  const {} = useFetchData("/configs/members.json");
  return (
    <>
      <div className="flex flex-col w-full h-32 px-40">
        <h1>Tablas</h1>
        <table className="table-auto text-sm">
          <thead className="h-10">
            <tr className="bg-cyan-500 text-white">
              <th className="px-4 text-start">Clave</th>
              <th className="px-4 text-start">Proyecto</th>
              <th className="px-4 text-start">Duracion</th>
              <th className="px-4 text-start">Director</th>
              <th className="px-4 text-start">Colaboradores</th>
              <th className="px-4 text-start">Tipo</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-neutral-200 hover:bg-cyan-500 hover:text-white">
              <td className="p-2 text-start">5667.1 9-P </td>
              <td className="p-2 text-start">
                Análisis y desarrollo de ontología para el fortalecimiento d el
                sector agrícola
              </td>
              <td className="p-2 text-start">
                01 de enero al 37 de diciembre de 2019
              </td>
              <td className="p-2 text-start">Dr. Fernando Pech May</td>
              <td className="p-2 text-start">
                Manuel Segovia López, Edna Mariel Mil Chontal, Jorge Magaña
                Govea, Luis Antonio López Gómez
              </td>
              <td className="p-2 text-start">Externo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tablespersonal;
