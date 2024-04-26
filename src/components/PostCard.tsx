import type { FC } from "react";
import * as prismicH from "@prismicio/helpers";

const PostCard: FC<{ titulo: string; img: string; url: string }> = ({
  titulo,
  img,
  url,
}) => {
  return (
    <div className="w-80 h-96 border shadow rounded-lg flex flex-col items-center">
      <h6 className="text-center">{titulo}</h6>
      <img
        className="aspect-square size-60 rounded-lg object-cover"
        src={img}
        alt={titulo}
      />
      <a href={`/post${url}`}>Ver más</a>
    </div>
  );
};
export default PostCard;
