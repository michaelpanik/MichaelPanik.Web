import { Link } from "gatsby";
import React from "react";
import tw from "twin.macro";
import useNavigation from "../../hooks/useNavigation";
import { StyledLink } from "../Link";
import HeaderFooter from "./HeaderFooter";

const HeaderNavigation = ({ open }) => {
  const navItems = useNavigation();

  return (
    <nav
      css={[
        tw`opacity-0 fixed top-0 left-0 bg-primary w-screen h-screen flex items-center justify-center text-center z-40 pointer-events-none
        lg:(block opacity-100 static w-full h-auto bg-transparent text-left pointer-events-auto)`,
        open && tw`opacity-100 pointer-events-auto`,
      ]}
    >
      <ul>
        {navItems.map((item) => {
          let active;
          if (typeof window !== "undefined") {
            active = window.location.pathname.includes(item.url);
          }
          return (
            <li>
              <StyledLink
                href={item.url}
                css={[tw`inline-block text-lg mb-6`]}
                dark
                active={active}
              >
                {item.label}
              </StyledLink>
            </li>
          );
        })}
      </ul>
      <HeaderFooter
        css={[tw`absolute bottom-0 left-0 w-full px-12 pb-6 lg:(hidden)`]}
      />
    </nav>
  );
};

export default HeaderNavigation;
