import { Hero } from "@/components/Hero";

const Home = () => {
  return (
    <>
      <Hero
        title="Tere tulemast Alfa Pro Autokooli!"
        body='
        Meie moto on "ME SÕIDAME SAMUDEL TEEDEL". See on meie
        positsioon, meie eluviis ja õppimine. Oma tegevuses keskendume
        autojuhikoolituse kvaliteedile.
        Meie kooli uksed alati avatud neile, kes tahavad õppida, püüdlevad
        teadmiste poole.
        '
        linkText="Minna avalehele"
        href="/home"
      />
    </>
  );
};

export default Home;
