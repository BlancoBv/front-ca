import { type FC, useEffect, useState } from "react";
import Img from "./Img";
import { useSpringRef, useTransition, animated } from "@react-spring/web";
import useGetData from "../hooks/useGetData";

const Caruselpersonal: FC = () => {
  const { data, isPending, error } = useGetData("/miembros");

  return (
    <>
      {!isPending && <Success data={data} />}
      {isPending && (
        <div className="h-full w-full flex justify-center items-center">
          <div className="w-full flex flex-col gap-4">
            <div className="bg-slate-500 animate-pulse rounded-lg h-3 w-full" />
            <div className="bg-slate-500 animate-pulse rounded-lg h-3 w-full" />
            <div className="bg-slate-500 animate-pulse rounded-lg h-3 w-full" />
            <div className="bg-slate-500 animate-pulse rounded-lg h-3 w-full" />
            <div className="bg-slate-500 animate-pulse rounded-lg h-3 w-full" />
            <div className="bg-slate-500 animate-pulse rounded-lg h-3 w-full" />
            <div className="flex gap-4 items-center justify-center">
              <div className="size-16 bg-slate-500 rounded-lg animate-pulse" />
              <div className="flex flex-col gap-4">
                <div className=" h-3 w-20 bg-slate-500 animate-pulse rounded-lg" />
                <div className=" h-3 w-6 bg-slate-500 animate-pulse rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Success: FC<{ data: any }> = ({ data }) => {
  const [index, setIndex] = useState<number>(0);
  const ref = useSpringRef();

  const transitions = useTransition(index, {
    ref,
    keys: null,
    from: {
      opacity: 1,
      transform: "translate3d(100%,0,-100px) rotateY(50deg)",
    },
    enter: { opacity: 1, transform: "translate3d(0px,0,0px) rotateY(0deg)" },
    leave: {
      opacity: 0,
      transform: "translate3d(-100%,0,0) rotateY(0deg)",
    },
    onRest: (_a, _b, item) => {
      if (index === item) {
        setIndex(index === data.length - 1 ? 0 : index + 1);
      }
    },
    exitBeforeEnter: true,
    config: (_item, _index, state) =>
      state === "leave" ? { duration: 5000 } : { duration: 2000 },
  });

  useEffect(() => {
    ref.start();
  }, [index]);

  return (
    <>
      {transitions((style, index) => (
        <animated.div
          style={style}
          className="z-0 flex flex-col font-serif place-content-center items-center py-0 sm:py-20 transform-gpu"
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
      <div className="absolute bottom-0 w-full h-5 flex justify-evenly">
        {data.map((el: any, indexActual: number) => (
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

export default Caruselpersonal;
