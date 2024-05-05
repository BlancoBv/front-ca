import { useState, type FC } from "react";
import useGetData from "../hooks/useGetData";
import PostCard from "./PostCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const PostContainer: FC = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isPending, error } = useGetData(`/post/paginated/${page}`);

  return (
    <>
      {!isPending &&
        !error &&
        data.results.map(
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
      {!isPending && error && <div>Sin contenido </div>}
      {!isPending && !error && (
        <div className="absolute bottom-0 flex gap-2 items-center">
          <button
            className="rounded-full scale-90 bg-blue-600 origin-center top-2/4 right-0 enabled:hover:scale-100 disabled:opacity-50 size-14 transition-transform ease-in-out duration-300 text-white"
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page <= 1}
          >
            <FontAwesomeIcon className=" size-full" icon={faAngleLeft} />
          </button>
          <p>
            {page} / {data.total_pages}{" "}
          </p>
          <button
            className="rounded-full scale-90 bg-blue-600 origin-center top-2/4 right-0 enabled:hover:scale-100 disabled:opacity-50 size-14 transition-transform ease-in-out duration-300 text-white"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === data.total_pages}
          >
            <FontAwesomeIcon className="size-14" icon={faAngleRight} />
          </button>
        </div>
      )}
    </>
  );
};
export default PostContainer;
