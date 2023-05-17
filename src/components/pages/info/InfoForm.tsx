export const InfoForm = () => {
  return (
    <>
      <form action="">
        <div className="flex flex-col gap-3">
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Nimi</span>
            </label>
            <input
              type="text"
              placeholder="Toivo"
              className="w-full input input-bordered"
            />
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="mymail@mail.com"
              className="w-full input input-bordered"
            />
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Lisa infot</span>
            </label>
            <textarea
              placeholder="Info"
              className="w-full textarea textarea-bordered textarea-md"
            ></textarea>
          </div>
          <input type="button" className="btn btn-primary" value="Saada" />
        </div>
      </form>
    </>
  );
};
