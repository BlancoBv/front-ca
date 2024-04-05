export const Select = ({ name, id, data, onChange }: any) => {
  return (
    <select
      name={name}
      id={id}
      className="border border-blue-900 p-2"
      onChange={onChange}
    >
      {data.map((el: any) => (
        <option key={el.value} value={el.value}>
          {el.text}
        </option>
      ))}
    </select>
  );
};

export const InputText = ({ name, id, placeholder, required }: any) => {
  return (
    <input
      type="text"
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
      className="border border-blue-900 p-2 rounded"
    />
  );
};

export const TextArea = ({ name, id, cols, rows, required }: any) => {
  return (
    <textarea
      name={name}
      id={id}
      cols={cols || "30"}
      rows={rows || "5"}
      required={required}
      className="border border-blue-900 p-2 rounded"
    ></textarea>
  );
};

export const BtnSubmit = ({ value }: any) => {
  return (
    <button
      type="submit"
      className="bg-blue-900 rounded hover:bg-blue-800 active:bg-blue-700 text-white p-2"
    >
      {value || "Enviar"}
    </button>
  );
};
