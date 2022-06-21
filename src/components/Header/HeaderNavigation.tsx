import { Link } from "gatsby";
import React from "react";
import tw from "twin.macro";
import useNavigation from "../../hooks/useNavigation";
import { StyledLink } from "../Link";

const HeaderNavigation = () => {
  const navItems = useNavigation();

  return (
    <nav className="site-navigation" id="siteNavigation">
      <ul>
        {navItems.map((item) => (
          <li>
            <StyledLink
              href={item.url}
              css={[tw`inline-block text-lg mb-6`]}
              dark
            >
              {item.label}
            </StyledLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
