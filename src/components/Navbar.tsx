import type { FC } from "react";
import useGetData from "../hooks/useGetData";
import Menudropdown from "./Menudropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

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
        className="absolute right-2 size-10"
        icon={faBars}
        onClick={showMenu}
        width="30px"
      />
      <div
        id="container-nav"
        className="w-full flex justify-evenly make-invisible"
      >
        <FontAwesomeIcon
          icon={faBarsStaggered}
          onClick={hideMenu}
          width="30px"
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
                }`}
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
