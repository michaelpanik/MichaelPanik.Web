import React from "react";
import { GlobalStyles } from "../GlobalStyles";
import { Header } from "../Header";

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
