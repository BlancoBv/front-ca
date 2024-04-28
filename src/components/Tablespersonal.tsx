import type { FC } from "react";

const Tablespersonal: FC<{
  titulo: string;
  datos: any;
  columnas: { name: string; selector: (name: any) => string }[];
}> = ({ titulo, datos, columnas }) => {
  return (
    <div className="flex flex-col w-full py-8">
      <h3 className="pb-4">{titulo}</h3>
      <table className="table-fixed text-sm w-full font-sans">
        <thead className="h-12">
          <tr className="bg-cyan-500 text-white text-lg">
            {columnas.map((el) => (
              <th className="text-center">{el.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datos.map((row: any) => (
            <tr
              className="bg-neutral-200 hover:bg-cyan-500 hover:text-white cursor-pointer"
              onClick={() => {
                window.open(row.url, "__blank");
              }}
              title="Abrir proyecto/articulo"
            >
              {columnas.map((col) => (
                <td className="text-center p-3">{col.selector(row)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablespersonal;
