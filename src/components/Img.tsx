import { useSpringRef, useTransition } from "@react-spring/web";
import React, { useState, type FC } from "react";

const Img: FC<{ source: string; alt: string; styles?: string }> = ({
  source,
  alt,
  styles,
}) => {
  const [imagePending, setImagePending] = useState<boolean>(true);
  console.log(imagePending);

  return (
    <>
      <img
        className={`object-cover ${styles}`}
        src={source}
        alt={alt}
        onLoad={async () => {
          setImagePending(false);
        }}
        loading="lazy"
      />
    </>
  );
};
Img.defaultProps = {
  styles: "",
};

export default Img;
