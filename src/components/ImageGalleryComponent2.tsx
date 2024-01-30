// high resolution images
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";
import img14 from "../assets/images/img14.jpg";
import img15 from "../assets/images/img15.jpg";
import img16 from "../assets/images/img16.jpg";

// low resolution images
import img1Small from "../assets/small/img1-small.jpg";
import img2Small from "../assets/small/img2-small.jpg";
import img3Small from "../assets/small/img3-small.jpg";
import img4Small from "../assets/small/img4-small.jpg";
import img5Small from "../assets/small/img5-small.jpg";
import img6Small from "../assets/small/img6-small.jpg";
import img7Small from "../assets/small/img7-small.jpg";
import img8Small from "../assets/small/img8-small.jpg";
import img9Small from "../assets/small/img9-small.jpg";
import img10Small from "../assets/small/img10-small.jpg";
import img11Small from "../assets/small/img11-small.jpg";
import img12Small from "../assets/small/img12-small.jpg";
import img13Small from "../assets/small/img13-small.jpg";
import img14Small from "../assets/small/img14-small.jpg";
import img15Small from "../assets/small/img15-small.jpg";
import img16Small from "../assets/small/img16-small.jpg";

import ImageComponent5 from "./ImageComponent5";

const imageData = [
  {
    lowResImage: img1Small,
    highResImage: img1,
  },
  {
    lowResImage: img2Small,
    highResImage: img2,
  },
  {
    lowResImage: img3Small,
    highResImage: img3,
  },
  {
    lowResImage: img4Small,
    highResImage: img4,
  },
  {
    lowResImage: img5Small,
    highResImage: img5,
  },
  {
    lowResImage: img6Small,
    highResImage: img6,
  },
  {
    lowResImage: img7Small,
    highResImage: img7,
  },
  {
    lowResImage: img8Small,
    highResImage: img8,
  },
  {
    lowResImage: img9Small,
    highResImage: img9,
  },
  {
    lowResImage: img10Small,
    highResImage: img10,
  },
  {
    lowResImage: img11Small,
    highResImage: img11,
  },
  {
    lowResImage: img12Small,
    highResImage: img12,
  },
  {
    lowResImage: img13Small,
    highResImage: img13,
  },
  {
    lowResImage: img14Small,
    highResImage: img14,
  },
  {
    lowResImage: img15Small,
    highResImage: img15,
  },
  {
    lowResImage: img16Small,
    highResImage: img16,
  },
];

export default function ImageGalleryComponent2() {
  return (
    <div className="grid">
      {imageData.map((image) => (
        <ImageComponent5
          lowResImage={image.lowResImage}
          highResImage={image.highResImage}
          key={image.highResImage}
        />
      ))}
    </div>
  );
}
