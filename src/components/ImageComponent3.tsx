import { useEffect, useState } from "react";

export type ImageComponentProps = {
  lowResImage: string;
  highResImage: string;
};

export default function ImageComponent3({
  lowResImage,
  highResImage,
}: ImageComponentProps) {
  const [currentImage, setCurrentImage] = useState(lowResImage);

  // console.log("lowResImage", lowResImage);
  // console.log("highResImage", highResImage);

  useEffect(() => {
    const img = new Image();
    img.src = highResImage;
    img.onload = () => {
      setCurrentImage(highResImage);
    };
  }, [highResImage]);

  return (
    <div className="blur-load">
      <img src={currentImage} alt={currentImage} loading="lazy" />
    </div>
  );
}
