import { useState, type FC, type ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowPointer,
  faFont,
  faLink,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";

const Accesibilidad: FC = () => {
  const focusAllLinks = (state: boolean) => {
    const allAnchors: any = document.getElementsByTagName("a");
    console.log(allAnchors);
    if (!state) {
      Array.from(allAnchors).forEach((el: any) => {
        console.log(el);
        el.style.backgroundColor = "red";
      });
    } else {
      Array.from(allAnchors).forEach((el: any) => {
        console.log(el);
        el.style.backgroundColor = "";
      });
    }
  };
  const changeCursor = (state: boolean) => {
    if (!state) {
      document.body.style.cursor = `url(https://www.infomexsinaloa.org/accesibilidadweb/icons/pointer.png), auto`;
    } else {
      document.body.style.cursor = "";
    }
  };
  const changeFontSize = (state: boolean) => {
    if (!state) {
      document.body.style.fontSize = "20pt";
    } else {
      document.body.style.fontSize = "";
    }
  };

  return (
    <div className="group fixed top-2/4 end-0 translate-y-1/2 z-50 p-2">
      <FontAwesomeIcon
        className="size-14 text-blue-600"
        icon={faUniversalAccess}
        title="Accesibilidad"
      />

      <div className="flex flex-col absolute top-2/4 -translate-y-2/4  scale-0 invisible group-hover:visible group-hover:scale-100 group-hover:-translate-x-full  transition-all ease-in-out duration-300">
        <AccessButton action={focusAllLinks}>
          <FontAwesomeIcon icon={faLink} className="size-10" />
        </AccessButton>
        <AccessButton action={changeCursor}>
          <FontAwesomeIcon icon={faArrowPointer} className="size-10" />
        </AccessButton>
        <AccessButton action={changeFontSize}>
          <FontAwesomeIcon icon={faFont} className="size-10" />
        </AccessButton>
      </div>
    </div>
  );
};

const AccessButton: FC<{
  action: any;
  label?: string;
  children?: ReactNode;
}> = ({ action, label, children }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <button
      className={`odd:ms-5 hover:text-blue-400 ${isActive && "text-blue-400"}`}
      onClick={() => {
        action(isActive);
        setIsActive(!isActive);
      }}
    >
      {label}
      {children}
    </button>
  );
};

export default Accesibilidad;
