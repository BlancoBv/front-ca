import type { FC } from "react";

const PostCard: FC<{ titulo: string; img: string; url: string }> = ({
  titulo,
  img,
  url,
}) => {
  return (
    <div className="w-80 h-96 border shadow rounded-lg flex flex-col items-center py-3 px-2 space-y-5 font-sans mb-5">
      <h6 className="text-center font-semibold min-h-14">{titulo}</h6>
      <img
        className="aspect-square size-52 rounded-lg object-cover"
        src={img}
        alt={titulo}
      />
      <a
        className=" text-white rounded-xl p-2 bg-blue-900 hover:bg-blue-600  hover:scale-105 transition-all ease-in-out duration-300"
        href={`/post${url}`}
      >
        Ver más
      </a>
    </div>
  );
};
export default PostCard;
