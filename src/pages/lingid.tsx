import lingid from "@/data/lingid.json";
import { LinkButton } from "@/components/pages/lingid/LinkButton";
import Link from "next/link";

const Lingid = () => {
  return (
    <>
      <h1 className="text-3xl">Lingid</h1>
      <ul className="flex flex-col gap-3">
        {lingid.map((link) => (
          <li key={link.url}>
            <LinkButton name={link.name} url={link.url} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Lingid;
