import Image from "next/image";

import AlfaProImage from "@/assets/alfapro.jpg";
import { StyledLink } from "@/components/StyledLink";

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
    <>
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
          <ol className="list-disc">
            {features.map((feature) => (
              <li key={feature.body}>{feature.body}</li>
            ))}
          </ol>
        </div>
        <Image
          src={AlfaProImage}
          alt="AlfaPro index image"
          className="w-full h-auto max-w-xl rounded-xl"
        />
      </section>
      <section className="grid gap-3">
        <h2 className="text-2xl">
          Autokooli tegevuse kvaliteedi tagamise alused
        </h2>
        <p>
          Autokool Alfa Pro tegutseb Haridus- ja Teadusministeeriumi poolt
          väljastatud tegevuslubade alusel. Iga koolituse liigi kohta
          koostatakse õppekava, mis vastab õigusaktide nõuetele.
        </p>
        <p>
          Õppekavasid koostatakse õpiväljundipõhiselt ehk lähtudes sellest,
          milliseid teadmisi ja oskusi peab õppur koolituse käigus omandama.
          Seejuures võetakse arvesse autokooli juhtkonna ja töötajate kogemusi
          ning Transpordiameti kehtivaid eksaminõudeid. Õppekavade koostamisel
          tehakse koostööd teiste erialade spetsialistidega, kes annavad oma
          erapooletu hinnangu.
        </p>
        <p>
          Autokoolis Alfa Pro töötavad ainult professionaalsed õpetajad, kes
          omavad kehtivat mootorsõidukijuhi õpetaja tunnistust ja kutselise
          autojuhi kehtivat tervisetõendit. Õpetajad läbivad regulaarselt
          erialaseid täienduskoolitusi ning osalevad erialastel seminaridel ja
          infopäevadel.
        </p>
        <p>
          Autokoolis kasutatavad õppesõidukid on oma tehniliste omaduste poolest
          sarnased Eesti tavapäraste vastava kategooria sõidukitega. See aitab
          autokooli lõpetanud õppuritel saada liikluses hakkama nii riiklikul
          sõidueksamil kui ka hiljem, kui hakatakse kasutama isiklikku sõidukit.
          Õppesõidukid läbivad nõuetekohase õppesõiduki ülevaatuse ja vastavad
          õigusaktide nõuetele. Iga õpetaja vastutab selle eest, et tema
          kasutuses olev sõiduk oleks nii seest kui ka väljast puhas.
        </p>
        <p>
          Autokool Alfa Pro kasutab ka elektroonilist õppekeskkonda, kus õppurid
          teevad kodutöid ja sooritavad teooriaeksameid. E-keskkonna
          teenusepakkujaks on Liikluslab Baltic OÜ ja Teooria.ee.
        </p>
        <p>
          Autokool Alfa Pro pakub oma õpilastele võimalust jätta tagasisidet
          koolituse kohta. Seda võimalust pakutakse pärast koolituse lõpetamist
          ja tagasisidet on võimalik jätta nii suuliselt kui ka e-posti teel.
          Tagasisidet kogutakse ka jooksvalt, esitades õpilastele küsimusi
          õppetöö käigus.
        </p>
      </section>
      <StyledLink href="/Autokooli_tegevuse_kvaliteedi_tagamise_alused.docx">
        Autokooli_tegevuse_kvaliteedi_tagamise_alused.docx
      </StyledLink>
    </>
  );
};

export default Home;
