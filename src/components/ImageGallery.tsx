import { FC } from "react";
import ImageComponent from "./ImageComponent";
import img1 from "../assets/images/img-1.jpg";

export type ImageGalleryProps = {};

const ImageGallery: FC<ImageGalleryProps> = ({}) => {
  return (
    <div className="image-gallery">
      <ImageComponent src={img1} />
    </div>
  );
};

export default ImageGallery;
