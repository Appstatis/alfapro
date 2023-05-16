import { Service } from "@/components/pages/teenused/Service";
import teenused from "@/data/teenused.json";

const Teenused = () => {
  return (
    <>
      <h1 className="text-3xl">Teenused</h1>
      {teenused.map((service) => (
        <Service key={service.title} {...service} />
      ))}
    </>
  );
};

export default Teenused;
