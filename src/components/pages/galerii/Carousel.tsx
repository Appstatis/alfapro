import instructor1 from "@/assets/instructor_1.jpg";
import instructor2 from "@/assets/instructor_2.jpg";
import instructor3 from "@/assets/instructor_3.jpg";
import instructor4 from "@/assets/instructor_4.jpeg";
import office from "@/assets/office.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Image = {
  src: StaticImageData;
  alt: string;
};

export const Carousel = () => {
  return (
    <>
      <div className="w-full carousel">
        <div id="item1" className="w-full carousel-item">
          <Image src={instructor1} className="w-full" alt="Instructor 1" />
        </div>
        <div id="item2" className="w-full carousel-item">
          <Image src={instructor2} className="w-full" alt="Instructor 2" />
        </div>
        <div id="item3" className="w-full carousel-item">
          <Image src={instructor3} className="w-full" alt="Instructor 3" />
        </div>
        <div id="item4" className="w-full carousel-item">
          <Image src={instructor4} className="w-full" alt="Instructor 4" />
        </div>
        <div id="item5" className="w-full carousel-item">
          <Image src={office} className="w-full" alt="Instructor 5" />
        </div>
      </div>
      <div className="flex justify-center w-full gap-2 py-2">
        <Link href="#item1" className="btn btn-xs btn-primary">
          1
        </Link>
        <Link href="#item2" className="btn btn-xs btn-primary">
          2
        </Link>
        <Link href="#item3" className="btn btn-xs btn-primary">
          3
        </Link>
        <Link href="#item4" className="btn btn-xs btn-primary">
          4
        </Link>
        <Link href="#item5" className="btn btn-xs btn-primary">
          5
        </Link>
      </div>
    </>
  );
};
