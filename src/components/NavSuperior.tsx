import type { FC } from "react";
import useGetData from "../hooks/useGetData";

const NavSuperior: FC = () => {
  const { data, isPending } = useGetData("/menuSuperior");
  return (
    <nav className="flex w-full justify-evenly items-center">
      {!isPending &&
        data.map((elemento: { id: number; nombre: string; enlace: string }) => (
          <a key={elemento.id} href={elemento.enlace} className="px-2">
            {elemento.nombre}
          </a>
        ))}
    </nav>
  );
};
export default NavSuperior;
