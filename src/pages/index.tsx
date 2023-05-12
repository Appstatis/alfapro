import Image from "next/image";

import AlfaProImage from "@/assets/alfapro.jpg";

const Home = () => {
  return (
    <main>
      <Image
        src={AlfaProImage}
        alt="AlfaPro index image"
        className="h-auto max-w-full rounded-xl"
      />
    </main>
  );
};

export default Home;
