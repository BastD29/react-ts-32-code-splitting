import { FC, useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

export type ImageComponentProps = {
  src: string;
};

const ImageComponent: FC<ImageComponentProps> = ({ src }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      <div style={{ display: imageLoaded ? "none" : "inline" }}>
        <Blurhash
          hash="L171Wf#600SL1GlAe7%Nx^R4.AR4"
          width={640}
          height={427}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        src={src}
        alt=""
        style={{ display: !imageLoaded ? "none" : "inline" }}
      />
    </>
  );
};

export default ImageComponent;
