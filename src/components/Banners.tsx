import { type FC, useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import Img from "./Img";
import { useSpringRef, useTransition, animated } from "@react-spring/web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Banners: FC = () => {
  const TIMER_INTERVAL = 3000;

  const [index, setIndex] = useState<number>(0);
  const [timer, setTimer] = useState<any>(null);
  const { data, isPending, error } = useGetData("/banners");

  const ref = useSpringRef();

  const autoClick = () => {
    const element = document.getElementById("next-banner");
    element.click();
  };

  const transitions = useTransition(index, {
    ref,
    keys: null,
    from: { opacity: 1, transform: "translateZ(30px)" },
    enter: { opacity: 1, transform: "translateZ(100px)" },
    leave: { opacity: 0, transform: "translate3d(100%,0,100px)" },
    exitBeforeEnter: true,
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
    <div
      className="relative overflow-hidden w-full h-60 sm:h-3/4"
      style={{ perspective: "1000px" }}
    >
      {!isPending &&
        transitions((style, index) => (
          <animated.div style={style} className="z-0 h-full w-full relative">
            <Img
              source={data[index]["img"]}
              alt="ola"
              styles="h-full w-full object-fit"
            />

            <div className="absolute bottom-0 origin-center bg-white opacity-80 h-50 p-3 rounded-lg w-full left-0 sm:bottom-1/4 sm:w-60 sm:left-3/4">
              <h4 className="text-center">{data[index]["title"]}</h4>
              <p className="italic text-sm py-2 text-justify sm:text-center">
                {data[index]["description"]}
              </p>
            </div>
          </animated.div>
        ))}
      {isPending && (
        <div className="animate-pulse w-full h-full bg-slate-700" />
      )}

      <button
        className="absolute origin-center top-2/4 right-0"
        onClick={nextCard}
        id="next-banner"
      >
        <FontAwesomeIcon className="size-14" icon={faAngleRight} />
      </button>
      <button
        className="absolute origin-center top-2/4 left-0 "
        onClick={previousCard}
      >
        <FontAwesomeIcon className="size-14" icon={faAngleLeft} />
      </button>
    </div>
  );
};

export default Banners;
