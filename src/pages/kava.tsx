import { Hero } from "@/components/Hero";
import { KavaTable } from "@/components/pages/kava/KavaTable";
import kava from "@/data/kava.json";

const Kava = () => {
  return (
    <div className="overflow-x-auto">
      <KavaTable kava={kava} />
    </div>
  );
};

export default Kava;
