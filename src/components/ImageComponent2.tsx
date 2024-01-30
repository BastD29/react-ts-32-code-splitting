export type ImageComponentProps = {
  image: string;
};

export default function ImageComponent2({ image }: ImageComponentProps) {
  return (
    <div
      className="blur-load"
      style={{ backgroundImage: "url('../assets/small/img1-small.jpg')" }}
    >
      <img src={image} alt="" key={image} loading="lazy" />
    </div>
  );
}
