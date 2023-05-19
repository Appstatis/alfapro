import { useState } from "react";

import { validateEmail } from "@/utils/validateEmail";
import { validateIsikukood } from "@/utils/validateIsikukood";
import { validatePhone } from "@/utils/validatePhone";

const FORMSPARK_ACTION_URL = "https://submit-form.com/Hviu4ed5";

export const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isikukood, setIsikukood] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidIsikukood, setIsvalidIsikukood] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setIsikukood("");
    setPhone("");
    setInfo("");
  };

  // todo: add normal type to `e`
  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsValidEmail(false);

      console.log(`email: ${isValidEmail}`);

      return;
    }

    if (validateIsikukood(isikukood)) {
      setIsvalidIsikukood(false);

      return;
    }

    if (!validatePhone(phone)) {
      setIsValidPhone(false);

      return;
    }

    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        isikukood,
        phone,
        info,
      }),
    });

    clearForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Nimi</span>
          </label>
          <input
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
            type="text"
            placeholder="Toivo"
            className="w-full input input-bordered"
          />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Perekonnanimi</span>
          </label>
          <input
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            name="lastName"
            type="text"
            placeholder="Sarapuu"
            className="w-full input input-bordered"
          />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="mymail@mail.com"
            className="w-full input input-bordered"
          />
          {!isValidEmail && (
            <p className="text-red-500">
              Palun, sisestage kehtiv e-posti aadress
            </p>
          )}
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Isikukood</span>
          </label>
          <input
            required
            value={isikukood}
            onChange={(e) => setIsikukood(e.target.value)}
            name="isikukood"
            type="text"
            placeholder="37506060123"
            className="w-full input input-bordered"
          />
          {!isValidIsikukood && (
            <p className="text-red-500">Palun, sisestage kehtiv isikukood</p>
          )}
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Telefon</span>
          </label>
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            type="text"
            placeholder="55223366"
            className="w-full input input-bordered"
          />
          {!isValidPhone && (
            <p className="text-red-500">
              Palun, sisestage kehtiv telefoni number
            </p>
          )}
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Lisa infot</span>
          </label>
          <textarea
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            name="info"
            placeholder="Info"
            className="w-full textarea textarea-bordered textarea-md"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Saada
        </button>
      </div>
    </form>
  );
};
