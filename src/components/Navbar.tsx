import { useEffect, type FC } from "react";
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
  console.log(pathname);

  const { data, isPending } = useGetData("/menuAzul");

  const showMenu = () => {
    const element = document.getElementById("container-nav");
    element?.classList.remove("invisible");
    element?.classList.add("visible");
  };
  const hideMenu = () => {
    const element = document.getElementById("container-nav");
    element?.classList.remove("visible");
    element?.classList.add("invisible");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navElement: any = document.getElementById("navigation");
      const { scrollY } = window;

      if (scrollY > 40) {
        navElement.style.position = "fixed";
      } else {
        navElement.style = "";
      }
    });
  }, []);

  return (
    <nav className="flex-grow flex flex-row justify-evenly h-10 main-nav">
      <FontAwesomeIcon
        className="absolute right-2 size-10 text-2xl sm:invisible"
        icon={faBars}
        onClick={showMenu}
      />
      <div
        id="container-nav"
        className="w-full p-6 sm:p-0 flex text-white bg-blue-900 sm:bg-inherit sm:justify-evenly sm:text-black invisible fixed h-screen top-0 flex-col sm:top-auto sm:relative sm:visible sm:h-auto sm:flex-row transition-all ease-in-out duration-300"
      >
        <FontAwesomeIcon
          className="absolute end-4 size-10 text-2xl visible "
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
                key={value.id}
              />
            ) : (
              <a
                href={`/${value.url}`}
                className={`border-blue-600 ${
                  pathname === `/${value.url}` ? "border-b-2 text-blue-600" : ""
                }hover:text-blue-600 transition-all ease-in-out duration-300`}
                key={value.id}
              >
                {value.nombre}
              </a>
            )
          )}
      </div>
    </nav>
  );
};

export const NavBarPanel: FC = () => {
  const options = [
    { name: "Banners", route: "/panel/banners", icon: "" },
    { name: "Rutas de navegación", route: "/panel/nav-control", icon: "" },
    { name: "Otros enlaces", route: "/panel/otros-enlaces", icon: "" },
    { name: "Miembros", route: "/panel/miembros", icon: "" },
  ];
  return (
    <nav className="sm:h-full sm:w-1/6 flex flex-row sm:flex-col justify-evenly content-center dark:bg-gray-900 rounded shadow dark:shadow-none snap-x overflow-x-auto">
      {options.map((el) => (
        <a
          /* className={({ isActive }) =>
            isActive
              ? "border-b-2 sm:border-b-0 sm:border-l-2 duration-100 border-blue-700 p-2 snap-center w28 sm:w-full"
              : "transition-all ease-in hover:border-b-2 sm:hover:border-b-0  sm:hover:border-l-2 duration-100 border-blue-700 p-2 snap-center w-28 sm:w-full"
          } */
          className="transition-all ease-in hover:border-b-2 sm:hover:border-b-0  sm:hover:border-l-2 duration-100 border-blue-700 p-2 snap-center w-28 sm:w-full"
          href={el.route}
          key={el.name}
        >
          {el.name}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
