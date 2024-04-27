import { useState, type FC } from "react";

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
        onLoad={() => setImagePending(false)}
        loading="lazy"
      />
    </>
  );
};
Img.defaultProps = {
  styles: "",
};

export default Img;
