import { Link } from "gatsby";
import React from "react";
import tw from "twin.macro";
import { Logo } from "../Logo";
import { HeaderFooter, HeaderNavigation, HeaderNavigationToggle } from "./";

const Header = () => {
  return (
    <header
      css={[tw`flex flex-col bg-primary px-14 py-14 h-screen sticky top-0`]}
    >
      <main css={[tw`flex-1`]}>
        <Link to="/">
          <Logo alt="Michael Panik's logo" css={[tw`w-40 -ml-3 mb-12`]} />
        </Link>
        <HeaderNavigation />
        <HeaderNavigationToggle />
      </main>
      <HeaderFooter />
    </header>
  );
};

export default Header;
