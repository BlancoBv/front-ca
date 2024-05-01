import type { FC } from "react";
import useGetData from "../hooks/useGetData";
import PostCard from "./PostCard";

const PostContainer: FC = () => {
  const { data, isPending } = useGetData("/post");

  return (
    <section className="flex justify-evenly flex-wrap p-2 sm:p-8">
      {!isPending &&
        data.map(
          (el: {
            url: string;
            data: {
              imagen: { url: string };
              titulo_del_blog: { text: string }[];
            };
          }) => (
            <PostCard
              titulo={el.data.titulo_del_blog[0].text}
              img={el.data.imagen.url}
              url={el.url}
            />
          )
        )}

      {isPending && (
        <>
          <div className="w-80 h-96 border shadow rounded-lg flex flex-col items-center py-3 px-2 space-y-5 font-sans mb-5 animate-pulse">
            <div className="text-center font-semibold h-5 rounded-lg w-3/4 bg-slate-500" />
            <div className="text-center font-semibold h-5 rounded-lg w-3/4 bg-slate-500" />
            <div className="aspect-square size-52 rounded-lg object-cover bg-slate-500" />
            <div className=" text-white rounded-xl p-2 bg-slate-500 w-20 h-10  hover:scale-105 transition-all ease-in-out duration-300" />
          </div>
          <div className="w-80 h-96 border shadow rounded-lg flex flex-col items-center py-3 px-2 space-y-5 font-sans mb-5 animate-pulse">
            <div className="text-center font-semibold h-5 rounded-lg w-3/4 bg-slate-500" />
            <div className="text-center font-semibold h-5 rounded-lg w-3/4 bg-slate-500" />
            <div className="aspect-square size-52 rounded-lg object-cover bg-slate-500" />
            <div className=" text-white rounded-xl p-2 bg-slate-500 w-20 h-10  hover:scale-105 transition-all ease-in-out duration-300" />
          </div>
          <div className="w-80 h-96 border shadow rounded-lg flex flex-col items-center py-3 px-2 space-y-5 font-sans mb-5 animate-pulse">
            <div className="text-center font-semibold h-5 rounded-lg w-3/4 bg-slate-500" />
            <div className="text-center font-semibold h-5 rounded-lg w-3/4 bg-slate-500" />
            <div className="aspect-square size-52 rounded-lg object-cover bg-slate-500" />
            <div className=" text-white rounded-xl p-2 bg-slate-500 w-20 h-10  hover:scale-105 transition-all ease-in-out duration-300" />
          </div>
        </>
      )}
    </section>
  );
};
export default PostContainer;
