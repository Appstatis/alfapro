import { useRouter } from "next/router";
import React from "react";

import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/404" && <Navbar title="AlfaPro" />}
      <div
        className={`${router.pathname !== "/404" &&
          "px-4 py-1 sm:py-2 md:py-4 lg:py-6 xl:py-8 sm:px-8 md:px-16 lg:px-24 xl:px-32"}`}
      >
        {children}
      </div>
    </>
  );
};
