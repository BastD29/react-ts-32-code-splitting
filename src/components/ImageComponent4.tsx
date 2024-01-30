import { useEffect, useState } from "react";

export type ImageComponentProps = {
  lowResImage: string;
  highResImage: string;
};

export default function ImageComponent4({
  lowResImage,
  highResImage,
}: ImageComponentProps) {
  // const [currentImage, setCurrentImage] = useState(lowResImage);
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);

  // console.log("lowResImage", lowResImage);
  // console.log("highResImage", highResImage);

  useEffect(() => {
    const img = new Image();
    img.src = highResImage;
    img.onload = () => {
      // setCurrentImage(highResImage);
      setIsHighResLoaded(true);
    };
  }, [highResImage]);

  const backgroundStyle = {
    backgroundImage: `url(${lowResImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="blur-load" style={backgroundStyle}>
      {/* <img src={currentImage} alt={currentImage} loading="lazy" /> */}
      {isHighResLoaded && (
        <img src={highResImage} alt={highResImage} loading="lazy" />
      )}
    </div>
  );
}
