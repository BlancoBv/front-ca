import type { FC } from "react";

const PostCard: FC<{ titulo: string; img: string; url: string }> = ({
  titulo,
  img,
  url,
}) => {
  return (
    <div className="w-80 h-96 border shadow-2xl rounded-lg flex flex-col items-center py-3 px-2 space-y-5 font-sans">
      <h6 className="text-center font-semibold">{titulo}</h6>
      <img
        className="aspect-square size-60 rounded-lg object-cover"
        src={img}
        alt={titulo}
      />
      <a className=" hover:text-blue-600" href={`/post${url}`}>
        Ver más
      </a>
    </div>
  );
};
export default PostCard;
