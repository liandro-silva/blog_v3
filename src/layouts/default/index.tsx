import React, { type PropsWithChildren } from "react";
import { Navbar } from "@components";

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default DefaultLayout;
