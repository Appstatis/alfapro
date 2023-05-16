import instructor1 from "@/assets/instructor_1.jpg";
import instructor2 from "@/assets/instructor_2.jpg";
import instructor3 from "@/assets/instructor_3.jpg";
import instructor4 from "@/assets/instructor_4.jpeg";
import office from "@/assets/office.jpg";
import { Carousel } from "@/components/pages/galerii/Carousel";

const Galerii = () => {
  const images = [
    {
      src: instructor1,
      alt: "Instructor 1",
    },
    {
      src: instructor2,
      alt: "Instructor 2",
    },
    {
      src: instructor3,
      alt: "Instructor 3",
    },
    {
      src: instructor4,
      alt: "Instructor 4",
    },
    {
      src: office,
      alt: "Office",
    },
  ];

  return (
    <>
      <h1 className="text-3xl">Galerii</h1>
      <Carousel images={images} />
    </>
  );
};

export default Galerii;
