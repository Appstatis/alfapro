import { KavaTable } from "@/components/pages/kava/KavaTable";
import kava from "@/data/kava.json";

const Kava = () => {
  return (
    <>
      <h1 className="text-3xl">Õppekava</h1>
      <div className="overflow-x-auto">
        <KavaTable kava={kava} />
      </div>
    </>
  );
};

export default Kava;
