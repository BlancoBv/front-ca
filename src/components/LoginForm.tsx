import type { FC } from "react";
import Img from "./Img";

const LoginForm: FC = () => {
  return (
    <section className="flex justify-evenly items-center">
      <form className="h-full shadow-lg p-2   rounded-lg flex flex-col">
        <Img source={"/img/logoCA.png"} alt="LogoCA" />
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nombre de usuario
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </form>
    </section>
  );
};
export default LoginForm;
