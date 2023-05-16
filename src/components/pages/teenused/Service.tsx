export const Service = ({ title, body }: { title: string; body: string }) => {
  return (
    <div>
      <h2 className="text-2xl">{title}</h2>
      <p>{body}</p>
    </div>
  );
};
