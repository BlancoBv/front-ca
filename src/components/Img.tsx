import { useSpringRef, useTransition } from "@react-spring/web";
import React, { useState, type FC } from "react";

const Img: FC<{ source: string; alt: string }> = ({ source, alt }) => {
  const [imagePending, setImagePending] = useState<boolean>(true);

  return (
    <>
      {imagePending && (
        <div className="animate-pulse w-full h-full bg-slate-700" />
      )}

      <img
        className="object-cover"
        src={source}
        alt={alt}
        onLoad={() => setImagePending(false)}
      />
    </>
  );
};

export default Img;
