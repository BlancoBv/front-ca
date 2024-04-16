import useGetData from "../hooks/useGetData";
import Menudropdown from "./Menudropdown";

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

const Navbar = () => {
  const { data, isPending } = useGetData("/menuAzul");

  const { pathname } = window.location;

  console.log(data);

  return (
    <nav className="flex-grow flex flex-row justify-evenly">
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
    </nav>
  );
};

export default Navbar;
