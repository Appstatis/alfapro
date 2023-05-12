import React from "react";
import Link from "next/link";

export const Navbar = ({ title }: { title: string }) => {
  const links = [
    {
      name: "Autokool",
      href: "/autokool",
    },
    {
      name: "Teenused",
      href: "/teenused",
    },
    {
      name: "Hinnad",
      href: "/hinnad",
    },
    {
      name: "Galerii",
      href: "/galerii",
    },
    {
      name: "Õppekava",
      href: "/kava",
    },
    {
      name: "Lingid",
      href: "/lingid",
    },
    {
      name: "Küsi infot",
      href: "/info",
    },
  ];

  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="btn btn-ghost">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/"
          className="text-xl normal-case btn text-primary btn-ghost"
        >
          {title}
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="btn btn-ghost">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/register" className="btn btn-primary">
          Registreeri kursustele
        </Link>
      </div>
    </nav>
  );
};
