import React, { type FC, useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import Img from "./Img";
import { useSpringRef, useTransition, animated } from "@react-spring/web";

const Caruselpersonal: FC = () => {
  const [index, setIndex] = useState<number>(0);
  const { data, isPending, error } = useFetchData("/configs/members.json");
  console.log(data);

  const ref = useSpringRef();

  const transitions = useTransition(index, {
    ref,
    keys: null,
    from: { opacity: 1, transform: "translate3d(100%,0,-100px)" },
    enter: { opacity: 1, transform: "translate3d(0px,0,0px)" },
    leave: { opacity: 1, transform: "translate3d(-100%,0,-100px)" },
    onRest: (_a, _b, item) => {
      if (index === item) {
        setIndex(index === data.length - 1 ? 0 : index + 1);
      }
    },
    exitBeforeEnter: true,
    config: { duration: 2500 },
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
    <section className="aspect-video relative overflow-hidden w-full h-28">
      {/* {!isPending &&
        data.map((el: any, key) => (
         
        ))} */}

      {!isPending &&
        transitions((style, index) => (
          <animated.div
            style={style}
            className="z-0 h-full flex flex-col place-content-center items-center"
          >
            <p className="w-1/2 my-3 text-center text-xl font-sans">
              {data[index]["resumen"]}
            </p>

            <div className="flex h-1/3 py-7">
              <Img
                styles="size-16 rounded-lg"
                source={data[index]["img"]}
                alt="img"
              />
              <div className="flex-col px-8">
                <h3 className="text-sky-700">{data[index]["nombre"]} </h3>
                <h4>{data[index]["puesto"]}</h4>
              </div>
            </div>
          </animated.div>
        ))}
    </section>
  );
};

export default Caruselpersonal;
