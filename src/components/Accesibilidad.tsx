import { useState, type FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversalAccess } from "@fortawesome/free-solid-svg-icons";

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
    <div className="group fixed top-2/4 end-0 translate-y-1/2 z-50">
      <button>
        <FontAwesomeIcon className="size-10" icon={faUniversalAccess} />
      </button>

      {/* <button onClick={focusAllLinks}>Hiperviculos</button> */}
      <AccessButton action={focusAllLinks} label="Hipervinculos" />
      <AccessButton action={changeCursor} label="Cursor" />
      <AccessButton action={changeFontSize} label="Fuente" />
    </div>
  );
};

const AccessButton: FC<{ action: any; label: string }> = ({
  action,
  label,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <button
      onClick={() => {
        action(isActive);
        setIsActive(!isActive);
      }}
    >
      {label}
    </button>
  );
};

export default Accesibilidad;
