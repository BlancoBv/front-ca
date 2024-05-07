import { type FC, useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import Img from "./Img";
import { useSpringRef, useTransition, animated } from "@react-spring/web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Banners: FC = () => {
  const TIMER_INTERVAL = 4000;

  const [index, setIndex] = useState<number>(0);
  const [timer, setTimer] = useState<any>(null);
  const { data, isPending, error } = useGetData("/banners");

  const ref = useSpringRef();

  const autoClick = () => {
    const element = document.getElementById("next-banner");
    element?.click();
  };

  const transitions = useTransition(index, {
    ref,
    keys: null,
    from: { opacity: 0, transform: "translateZ(-500px) rotateX(-180deg)" },
    enter: { opacity: 1, transform: "translateZ(0px) rotateX(0deg)" },
    leave: {
      opacity: 1,
      transform: "translateZ(-500px) rotateX(180deg)",
    },

    config: {
      duration: 500,
    },
    onRest: () => {
      if (!timer) {
        setTimeout(() => {
          autoClick();
        }, TIMER_INTERVAL);
      } //realiza el primer click para inicializar el intervalo
    },
  });

  const transitionsDetails = useTransition(index, {
    ref,
    keys: null,
    from: { opacity: 0, transform: "rotateX(-180deg)" },
    enter: { opacity: 1, transform: "rotateX(0deg)" },
    leave: {
      opacity: 1,
      transform: "rotateX(180deg)",
    },

    config: {
      duration: 800,
    },
  });
  const previousCard = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return data.length - 1;
      }
      return (prev - 1) % data.length;
    });
    clearInterval(timer);
    setTimer(setInterval(autoClick, TIMER_INTERVAL));
  };

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % data.length);
    clearInterval(timer);
    setTimer(setInterval(autoClick, TIMER_INTERVAL));
  };

  useEffect(() => {
    ref.start();
  }, [index]);

  useEffect(() => {
    return () => {
      clearInterval(timer);
    }; //busca cambioes en el intervalo, para limpiar el mismo
  }, [timer]);

  return (
    <>
      {!isPending &&
        transitions((style, index) => (
          <>
            <animated.img
              className="absolute h-full w-full object-cover transform-gpu"
              src={data[index]["img"]}
              style={{
                ...style,
                backfaceVisibility: "hidden",
              }}
            />

            {transitionsDetails((style, index) => (
              <animated.div
                style={{
                  ...style,
                  backfaceVisibility: "hidden",
                }}
                className="absolute bottom-0 origin-center bg-white opacity-80 h-50 p-3 rounded-lg w-full left-0 sm:bottom-1/4 sm:w-60 sm:left-3/4 transform-gpu"
              >
                <h4 className="text-center">{data[index]["title"]}</h4>
                <p className="italic text-sm py-2 text-justify sm:text-center">
                  {data[index]["description"]}
                </p>
              </animated.div>
            ))}
          </>
        ))}
      {isPending && (
        <div className="animate-pulse w-full h-full bg-slate-700" />
      )}

      <button
        className="absolute origin-center top-2/4 right-0 opacity-70 hover:text-blue-600"
        onClick={nextCard}
        id="next-banner"
      >
        <FontAwesomeIcon className="size-14 sm:size-20" icon={faAngleRight} />
      </button>
      <button
        className="absolute origin-center top-2/4 left-0 opacity-70 hover:text-blue-600"
        onClick={previousCard}
      >
        <FontAwesomeIcon className="size-14 sm:size-20" icon={faAngleLeft} />
      </button>
      <div className="absolute bottom-0 w-full h-5 flex justify-evenly">
        {!isPending &&
          data.map((el: any, indexActual: number) => (
            <div
              className={`h-4 w-10 ${
                index === indexActual ? "bg-blue-500" : "bg-slate-500"
              } rounded-lg `}
              key={`indicador ${el.id}`}
            />
          ))}
      </div>
    </>
  );
};

export default Banners;
