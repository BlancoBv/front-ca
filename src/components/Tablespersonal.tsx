import type { FC } from "react";

const Tablespersonal: FC<{
  titulo: string;
  datos: any;
  columnas: { name: string; selector: (name: any) => string }[];
}> = ({ titulo, datos, columnas }) => {
  return (
    <div className="flex flex-col w-full">
      <h3 className="pb-2">{titulo}</h3>
      <table className="table-fixed text-sm w-full">
        <thead className="h-10">
          <tr className="bg-cyan-500 text-white">
            {columnas.map((el) => (
              <th className="text-center">{el.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datos.map((row: any) => (
            <tr
              className="bg-neutral-200 hover:bg-cyan-500 hover:text-white"
              onClick={() => {
                window.open(row.url, "__blank");
              }}
              role="button"
            >
              {columnas.map((col) => (
                <td className="text-center">{col.selector(row)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablespersonal;
