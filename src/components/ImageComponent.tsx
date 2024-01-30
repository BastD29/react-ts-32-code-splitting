import { useEffect, useState } from "react";

export type ImageComponentProps = {
  image: string;
};

export default function ImageComponent({ image }: ImageComponentProps) {
  const [lowResImage, setLowResImage] = useState("");

  console.log("lowResImage:", lowResImage);

  // ! en mode throttle, même les miniatures prennent beaucoup de temps à charger (sûrement le temps de la génération, donc l'effet est nul...)
  // ! constat : il faut donc nécessairement déjà avoir les miniatures, la génération prend trop de temps
  useEffect(() => {
    const img = new Image();
    img.src = image;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const width = 10;
      const height = 10;
      canvas.width = width;
      canvas.height = height;

      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        setLowResImage(canvas.toDataURL("image/jpeg"));
      }
    };
  }, [image]);

  //   return (
  //     <div
  //       className="blur-load"
  //       style={{ backgroundImage: `url(../assets/small/${lowResImage})` }}
  //     >
  //       <img src={image} alt="" key={image} loading="lazy" />
  //     </div>
  //   );

  return (
    <div>
      {lowResImage ? (
        <img src={lowResImage} alt="Low Resolution" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
