import Link from "next/link";
import React from "react";

export const Hero = ({
  title,
  body,
  linkText,
  href,
}: {
  title: string;
  body: string;
  linkText: string;
  href: string;
}) => {
  return (
    <div className="min-h-screen hero">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{body}</p>
          <Link href={href} className="btn btn-primary">
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};
