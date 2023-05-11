import React from "react";
import { Navbar } from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar title="AlfaPro" />
      <div className="px-4 py-1 sm:py-2 md:py-4 lg:py-6 xl:py-8 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        {children}
      </div>
    </>
  );
};
