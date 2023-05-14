import Link from "next/link";
import React from "react";

export const StyledLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link className="link link-primary" href={href}>
      {children}
    </Link>
  );
};
