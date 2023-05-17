type InfoData = {
  email: string;
  phone: string;
  address: string;
  bankAccount: string;
  bankName: string;
};

export const SchoolInfo = ({ data }: { data: InfoData }) => {
  return (
    <div className="flex flex-col gap-2">
      <section>
        <h2 className="text-xl">Kontakt</h2>
        <div className="flex gap-2">
          <p>Email:</p>
          {data.email}
        </div>
        <div>
          <p>Telefon:</p>
          {data.phone}
        </div>
      </section>
      <section>
        <h2 className="text-xl">Kontakt andmed</h2>
        <div className="flex gap-2">
          <p>Aadress:</p>
          {data.address}
        </div>
      </section>
      <section>
        <h2 className="text-xl">Arved</h2>
        <div className="flex gap-2">
          <p>Arve:</p>
          {data.bankAccount}
        </div>
        <div className="flex gap-2">
          <p>Saaja:</p>
          {data.bankName}
        </div>
      </section>
    </div>
  );
};
