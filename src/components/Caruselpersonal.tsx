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
        setIndex(index === data.length - 1 ? 0 : index + 0);
      }
    },
    exitBeforeEnter: true,
    config: { duration: 2500 },
  });

  useEffect(() => {
    ref.start();
  }, [index]);

  return (
    <section className="aspect-video relative overflow-hidden w-full my-8 sm:m-0 h-full px-6 sm:px-40">
      {!isPending &&
        transitions((style, index) => (
          <animated.div
            style={style}
            className="z-0 flex flex-col font-serif place-content-center items-center py-0 sm:py-20"
          >
            <p className="w-2/3 sm:w-full text-center text-lg sm:text-xl text-gray-700">
              {data[index]["resumen"]}
            </p>

            <div className="flex w-full py-7 px-10 sm:px-0 justify-center">
              <Img
                styles="size-16 rounded-lg"
                source={data[index]["img"]}
                alt="img"
              />
              <div className="flex-col px-6">
                <h6 className="text-sky-800 text-sm sm:text-xl">
                  {data[index]["nombre"]}{" "}
                </h6>
                <h6 className=" text-sm">{data[index]["puesto"]}</h6>
              </div>
            </div>
          </animated.div>
        ))}
    </section>
  );
};

export default Caruselpersonal;
