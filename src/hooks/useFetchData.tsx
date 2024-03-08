import { useState, useEffect } from "react";

const useFetchData = (url: string) => {
  const [data, setData] = useState<[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    consultar(url)
      .then((res) => {
        setData(res);
        setIsPending(false);
      })
      .catch(() => setError(true));
  }, [url]);
  return { data, isPending, error };
};
const consultar = async (url: string) => {
  return fetch(url).then((res) => res.json());
};
export default useFetchData;
