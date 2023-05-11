import { Hero } from "@/components/Hero";

const NotFound = () => {
  return (
    <Hero
      title="404"
      body="Vabandust! Tundub, et otsitud lehekülg on kadunud või ei ole olemas. "
      linkText="Tagasi avalehele"
      href="/"
    />
  );
};

export default NotFound;
