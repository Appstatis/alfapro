export const RegisterForm = () => {
  return (
    <form action="">
      <div className="flex flex-col gap-3">
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Nimi</span>
          </label>
          <input
            required
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
            name="email"
            type="text"
            placeholder="mymail@mail.com"
            className="w-full input input-bordered"
          />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Isikukood</span>
          </label>
          <input
            required
            name="isikukood"
            type="text"
            placeholder="37506060123"
            className="w-full input input-bordered"
          />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Telefon</span>
          </label>
          <input
            required
            name="phone"
            type="text"
            placeholder="+372 55223366"
            className="w-full input input-bordered"
          />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Lisa infot</span>
          </label>
          <textarea
            required
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
