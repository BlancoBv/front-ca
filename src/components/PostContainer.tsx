import type { FC } from "react";
import useGetData from "../hooks/useGetData";
import PostCard from "./PostCard";

const PostContainer: FC = () => {
  const { data, isPending } = useGetData("/post");

  return (
    <section className="flex justify-evenly flex-wrap p-2">
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
    </section>
  );
};
export default PostContainer;
