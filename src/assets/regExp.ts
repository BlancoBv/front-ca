const regExp = (patron: string, entrada: any) => {
  const regularExpresion = new RegExp(patron);
  return regularExpresion.test(entrada);
};

export default regExp;
