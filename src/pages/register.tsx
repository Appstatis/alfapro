import { RegisterForm } from "@/components/pages/register/RegisterForm";

const Register = () => {
  return (
    <>
      <h1 className="text-3xl">Registreeri kursustele</h1>
      <div className="grid w-full grid-cols-1 mx-auto">
        <RegisterForm />
      </div>
    </>
  );
};

export default Register;
