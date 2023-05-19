import Image, { StaticImageData } from "next/image";

type Image = {
  src: StaticImageData;
  alt: string;
};

export const Carousel = ({ images }: { images: Image[] }) => {
  return (
    <div className="carousel rounded-box">
      {images.map((image) => (
        <div className="carousel-item">
          <Image key={image.alt} src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};
