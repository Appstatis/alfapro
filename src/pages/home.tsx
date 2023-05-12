import Image from "next/image";

import AlfaProImage from "@/assets/alfapro.jpg";

const Home = () => {
  const features = [
    {
      body:
        "Kaasaegsete autodega sõitmine, kõrge kvalifikatsiooniga instruktorid, erialane ettevalmistus, Individuaalne lähenemine õpilasele, ohutuse garantii teedel. - Internetikooli kasutamise võimalus.",
    },
    {
      body: "Taskukohased hinnad, etapiviisiline makse.",
    },
    {
      body:
        "Mugav autokooli asukoht, ligipääsetavus igast linnaosast igasugusele transport.",
    },
    {
      body:
        "Treenimine teile sobival ajal (sh hommikuti, õhtuti ja nädalavahetustel).",
    },
    {
      body: "Õppimise võimalus automaatkäigukastiga autol.",
    },
    {
      body: "Talvine sõit.",
    },
  ];

  return (
    <main>
      <section className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">Tere tulemast Alfa Pro Autokooli.</h2>
          <p>
            Meie moto on &quot;ME SÕIDAME SAMUDEL TEEDEL&quot;. See on meie
            positsioon, meie eluviis ja õppimine. Oma tegevuses keskendume
            autojuhikoolituse kvaliteedile.
          </p>
          <p>
            Meie kooli uksed alati avatud neile, kes tahavad õppida, püüdlevad
            teadmiste poole.
          </p>
          <p>Meil on kõik, mis teile sobib:</p>
          <ol>
            {features.map((feature) => (
              <li key={feature.body}>- {feature.body}</li>
            ))}
          </ol>
        </div>
        <Image
          src={AlfaProImage}
          alt="AlfaPro index image"
          className="h-auto max-w-full rounded-xl"
        />
      </section>
    </main>
  );
};

export default Home;
