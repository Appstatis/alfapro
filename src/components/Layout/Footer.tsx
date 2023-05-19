import Link from "next/link";

export const Footer = ({ title }: { title: string }) => {
  return (
    <footer className="p-10 footer footer-center bg-primary text-primary-content">
      <div>
        <p className="font-bold">{title}</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link
            className="hover:opacity-70"
            href="https://www.facebook.com/AlfaproAutokool"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};
