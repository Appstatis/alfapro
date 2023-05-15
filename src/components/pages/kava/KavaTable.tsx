type Kava = {
  id: string;
  date: string;
  time: string;
  course: string;
  type: string;
  price: string;
};

export const KavaTable = ({ kava }: { kava: Kava[] }) => {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Kuupäev</th>
          <th>Kellaaeg</th>
          <th>Kursus</th>
          <th>Õppe liik</th>
          <th>Hind</th>
        </tr>
      </thead>
      <tbody>
        {kava.map((kava) => (
          <tr key={kava.id}>
            <td>{kava.date}</td>
            <td>{kava.time}</td>
            <td>{kava.course}</td>
            <td>{kava.type}</td>
            <td>{kava.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
