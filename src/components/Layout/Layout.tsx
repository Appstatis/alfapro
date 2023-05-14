import { useRouter } from "next/router";
import React from "react";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/" && router.pathname !== "/404" && (
        <Navbar title="AlfaPro" />
      )}
      <div
        className={`${router.pathname !== "/404" &&
          router.pathname !== "/" &&
          "mb-2 md:mb-4 grid gap-5 px-4 py-1 sm:py-2 md:py-4 lg:py-6 xl:py-8 sm:px-16 md:px-16 lg:px-48 xl:px-64"}`}
      >
        {children}
      </div>
      <Footer title="Alfa Pro Autokool" />
    </>
  );
};
