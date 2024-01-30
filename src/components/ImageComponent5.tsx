import { useEffect, useState } from "react";

export type ImageComponentProps = {
  lowResImage: string;
  highResImage: string;
};

export default function ImageComponent5({
  lowResImage,
  highResImage,
}: ImageComponentProps) {
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = highResImage;
    img.onload = () => {
      setIsHighResLoaded(true);
    };
  }, [highResImage]);

  return (
    <div
      className={`blur-load ${isHighResLoaded ? "loaded" : ""}`}
      style={{ backgroundImage: `url(${lowResImage})` }}
    >
      <img
        src={highResImage}
        loading="lazy"
        style={{ opacity: isHighResLoaded ? 1 : 0 }}
      />
    </div>
  );
}
