import { useEffect, useState } from "react";
import { BtnSubmit, InputText, Select, TextArea } from "./UtilsForms";
import Axios, { urlMain } from "../../Axios";

const NuevoMiembro = () => {
  const [redesS, setRedesS] = useState([]);
  const [redesSeleccionada, setRedesSeleccionada] = useState([]);
  const [redHandle, setRedHandle] = useState<any>({
    value: "Fc",
    text: "Facebook",
  });

  useEffect(() => {
    fetch(`${urlMain}/api/redesSociales`)
      .then((res) => res.json())
      .then((res) =>
        setRedesS(res.map((el: any) => ({ value: el.sigla, text: el.nombre })))
      );
  }, []);

  const handleRedes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const text: any = redesS.find((el: any) => el.value === value);
    setRedHandle({ value, text: text["text"] });
  };

  const addRed = () => {
    const datos = [...redesSeleccionada];
    datos.push(redHandle);
    setRedesSeleccionada(datos);
  };

  const enviar = async (e: any) => {
    e.preventDefault();
    try {
      const redes = Array.from(e.target["redes-value"]).map((el: any) => ({
        plataforma: el.id,
        value: el.value,
      }));

      const contactos = e.target.contacto.value.split(",");

      const cuerpo = {
        nombre: e.target.nombre.value,
        apepat: e.target.apepat.value,
        apemat: e.target.apemat.value,
        puesto: e.target.puesto.value,
        grado: e.target.grado.value,
        resumen: e.target.resumen.value,
        bio: e.target.bio.value,
        contacto: {
          redes,
          contactos,
        },
      };

      await Axios.post("/miembros", cuerpo);

      alert("Se guardo correctamente");
      e.target.reset();
    } catch (err) {
      alert("Error al guardar miembro");
    }
  };

  return (
    <form onSubmit={enviar}>
      <div>
        <label htmlFor="nombre">nombre</label>
        <InputText name="nombre" placeholder="nombre" id="nombre" />
      </div>

      <div>
        <label htmlFor="apepat">Apellido Paterno</label>
        <InputText name="apepat" placeholder="Apellido Paterno" id="apepat" />
      </div>

      <div>
        <label htmlFor="apemat">Apellido Materno</label>
        <InputText name="apemat" placeholder="Apellido Materno" id="apemat" />
      </div>

      <div>
        <label htmlFor="puesto">Puesto</label>
        <InputText
          name="puesto"
          placeholder="Profesor-investigador"
          id="puesto"
        />
      </div>

      <div>
        <label htmlFor="grado">Grado</label>
        <InputText name="grado" placeholder="Dr, MATI, etc" id="grado" />
      </div>

      <div>
        <label htmlFor="resumen">Resumen</label>
        <TextArea name="resumen" id="resumen" />
      </div>

      <div>
        <label htmlFor="bio">Biografia</label>
        <TextArea name="bio" id="bio" />
      </div>

      <div>
        <div>
          <label id="redes" className="font-bold text-2xl">
            Redes sociales
          </label>
          <Select
            id="redes"
            name="redes"
            data={redesS}
            onChange={handleRedes}
          />
          <button
            type="button"
            className="bg-green-600 rounded text-white p-2"
            id="addRS"
            onClick={addRed}
          >
            Añadir
          </button>
        </div>
        <div>
          {redesSeleccionada.map((el: any) => (
            <div key={el.text}>
              <label htmlFor={el.text}>{el.text}</label>{" "}
              <InputText name="redes-value" id={el.text} placeholder="Link" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="contacto">Contactos</label>
        <p>Cada contacto separar por comas</p>
        <InputText
          name="contacto"
          id="contacto"
          placeholder="aj2@gamil.com, ja2@outlook.es"
        />
      </div>

      <div>
        <BtnSubmit />
      </div>
    </form>
  );
};

export default NuevoMiembro;
