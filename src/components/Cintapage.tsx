function CintaPage() {
  return (
    <>
      <div className="flex sm:px-28  px-10 w-full h-20 items-center justify-between bg-gray-200">
        <h1 className="font-semibold text-3xl">seccion</h1>
        <ul className="hidden sm:flex">
          <li className="hover:text-blue-400 transition-colors duration-300 pr-1">
            <a href="#">Inicio</a>
          </li>
          <li>/ Datos generales</li>
        </ul>
      </div>
    </>
  );
}

export default CintaPage;
