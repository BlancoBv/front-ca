import type { FC } from "react";
import useGetData from "../hooks/useGetData";
import Menudropdown from "./Menudropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

interface info {
  id: number;
  nombre: string;
  url: string;
  SubMenus: {
    id: number;
    nombre: string;
    menu: number;
    url: string;
  }[];
}

const Navbar: FC<{ pathname: string }> = ({ pathname }) => {
  const { data, isPending } = useGetData("/menuAzul");

  const showMenu = () => {
    const element = document.getElementById("container-nav");
    element?.classList.remove("make-invisible");
    element?.classList.add("make-visible");
  };
  const hideMenu = () => {
    const element = document.getElementById("container-nav");
    element?.classList.remove("make-visible");
    element?.classList.add("make-invisible");
  };

  return (
    <nav className="flex-grow flex flex-row justify-evenly h-10 main-nav">
      <FontAwesomeIcon
        className="absolute right-2 size-10 text-2xl"
        icon={faBars}
        onClick={showMenu}
      />
      <div
        id="container-nav"
        className="w-full p-6 sm:p-0 flex make-invisible text-white bg-blue-900 sm:bg-inherit sm:justify-evenly sm:text-black "
      >
        <FontAwesomeIcon
          className="absolute end-4 size-10 text-2xl"
          icon={faXmark}
          onClick={hideMenu}
        />
        {!isPending &&
          data.map((value: info) =>
            value.SubMenus.length > 0 ? (
              <Menudropdown
                name={value.nombre}
                items={value.SubMenus}
                test={value.url}
                baseUrl={value.url}
              />
            ) : (
              <a
                href={`/${value.url}`}
                className={`border-blue-600 ${
                  pathname === value.url ? "border-b-2 text-blue-600" : ""
                }hover:text-blue-600`}
              >
                {value.nombre}
              </a>
            )
          )}
      </div>
    </nav>
  );
};

export default Navbar;
