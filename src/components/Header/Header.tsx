import { Link } from "gatsby";
import React from "react";
import Logo from "../Logo";
import { HeaderFooter, HeaderNavigation, HeaderNavigationToggle } from "./";

const Header = () => {
  return (
    <header>
      <main>
        <Link to="/">
          <Logo className="logo" alt="Michael Panik's logo" />
        </Link>
        <HeaderNavigation />
        <HeaderNavigationToggle />
      </main>
      <HeaderFooter />
    </header>
  );
};

export default Header;
