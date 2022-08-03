import React, { type PropsWithChildren } from "react";
import { MobileNavbar, Navbar } from "@components";

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      {children}
    </>
  );
};

export default DefaultLayout;
