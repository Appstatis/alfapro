import { InfoForm } from "@/components/pages/info/InfoForm";
import { SchoolInfo } from "@/components/pages/info/SchoolInfo";

const Info = () => {
  const contactData = {
    email: "info@alfapro.ee",
    phone: "+372 58 40 98 67",
    address: "Narva mnt 7B-317",
    bankAccount: "EE362200221045532367 Swedbank",
    bankName: "Alfa Pro OÜ",
  };

  return (
    <>
      <h1 className="text-3xl">Küsi infot</h1>
      <div className="grid md:grid-cols-2">
        <SchoolInfo data={contactData} />
        <InfoForm />
      </div>
    </>
  );
};

export default Info;
