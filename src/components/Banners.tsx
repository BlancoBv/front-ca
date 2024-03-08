import React from "react";
import useFetchData from "../hooks/useFetchData";

function Banners() {
  const { data, isPending, error } = useFetchData("/configs/banners.json");

  console.log(data);

  return <div>Banners</div>;
}

export default Banners;
