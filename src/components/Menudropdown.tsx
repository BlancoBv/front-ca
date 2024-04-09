import regExp from "../assets/regExp";
interface Props {
  name: string;
  items: { id: number; nombre: string; menu: number; url: string }[];
  test: string;
  baseUrl: string;
}

const Menudropdown = ({ name, items, test, baseUrl }: Props) => {
  const { pathname } = window.location;
  return (
    <div className="relative inline-block text-left group">
      <button
        className={`inline-flex items-center justify-center px-4 text-black transition duration-150 ease-in-out hover:text-blue-600 border-blue-600 ${
          regExp(test, pathname) ? "border-b-2 text-blue-600" : ""
        }`}
      >
        {name}
      </button>

      <div className="hidden absolute right-0 mt-1 origin-top-right border-4 border-b-blue-600 bg-white border-gray-100 divide-y divide-gray-200 rounded-md shadow-lg group-hover:block min-w-full">
        {items.map((element) => (
          <a
            href={`/${baseUrl}/${element.url}`}
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:text-blue-500 focus:outline-none focus:bg-gray-100 focus:text-gray-800"
          >
            {element.nombre}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Menudropdown;
