import { validateEmail } from "@/utils/validateEmail";
import { useState } from "react";

const FORMSPARK_ACTION_URL = "https://submit-form.com/iosx6gf2";

export const InfoForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);

  // todo: add normal type to `e`
  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsValidEmail(false);

      return;
    }

    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        info,
      }),
    });

    setName("");
    setEmail("");
    setInfo("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-3">
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Nimi</span>
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="Toivo"
              className="w-full input input-bordered"
            />
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
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
              <span className="label-text">Lisa infot</span>
            </label>
            <textarea
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              maxLength={150}
              placeholder="Info"
              name="info"
              className="w-full textarea textarea-bordered textarea-md"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Saada
          </button>
        </div>
      </form>
    </>
  );
};
