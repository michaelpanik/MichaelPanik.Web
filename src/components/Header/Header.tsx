import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import { Logo } from "../Logo";
import { HeaderFooter, HeaderNavigation, HeaderNavigationToggle } from "./";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    if (document) {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }, [open]);

  return (
    <header
      css={[
        tw`flex bg-primary p-6 lg:(flex-col px-14 py-14 h-screen sticky top-0 z-50)`,
      ]}
    >
      <main
        css={[tw`flex w-full justify-between items-center lg:(flex-1 block)`]}
      >
        <Link to="/">
          <Logo
            alt="Michael Panik's logo"
            css={[tw`w-24 relative z-50 lg:(w-40 -ml-3 mb-12)`]}
          />
        </Link>
        <HeaderNavigation open={open} />
        <HeaderNavigationToggle onClick={toggleOpen} />
      </main>
      <HeaderFooter css={[tw`hidden lg:(block)`]} />
    </header>
  );
};

export default Header;
