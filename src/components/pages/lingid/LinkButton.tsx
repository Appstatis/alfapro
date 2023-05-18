import Link from "next/link";

export const LinkButton = ({ name, url }: { name: string; url: string }) => {
  return (
    <Link className="duration-200 hover:opacity-70" href={url}>
      <div className="shadow-md card bg-base-100">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="italic link">{url}</p>
        </div>
      </div>
    </Link>
  );
};
