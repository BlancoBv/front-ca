import React, { type FC, useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import Img from "./Img";
import { useSpringRef, useTransition, animated } from "@react-spring/web";

const Banners: FC = () => {
  const [index, setIndex] = useState<number>(0);
  const { data, isPending, error } = useGetData("/banners");

  const ref = useSpringRef();

  const transitions = useTransition(index, {
    ref,
    keys: null,
    from: { opacity: 1, transform: "translate3d(100%,0,-100px)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0px)" },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
    config: {
      duration: 500,
    },
  });
  const previousCard = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return data.length - 1;
      }
      return (prev - 1) % data.length;
    });
  };

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  useEffect(() => {
    ref.start();
  }, [index]);

  return (
    <section className="aspect-video relative overflow-hidden w-full h-1/5  sm:h-3/4">
      {!isPending &&
        transitions((style, index) => (
          <animated.div style={style} className="z-0 h-full w-full relative">
            <Img source={data[index]["img"]} alt="ola" />

            <div className="absolute top-2/4 right-1/4 origin-center bg-white opacity-80 w-60 h-50 p-2">
              <h2>{data[index]["title"]}</h2>
              <p>{data[index]["description"]}</p>
            </div>
          </animated.div>
        ))}
      {isPending && (
        <div className="animate-pulse w-full h-full bg-slate-700" />
      )}

      <button
        className="absolute origin-center top-2/4 right-0"
        onClick={nextCard}
      >
        Siguiente
      </button>
      <button
        className="absolute origin-center top-2/4 left-0"
        onClick={previousCard}
      >
        Anterior
      </button>
    </section>
  );
};

export default Banners;
