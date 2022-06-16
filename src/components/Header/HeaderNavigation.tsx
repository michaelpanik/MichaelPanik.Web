import { Link } from "gatsby";
import React from "react";
import useNavigation from "../../hooks/useNavigation";

const HeaderNavigation = () => {
  const navItems = useNavigation();

  return (
    <nav className="site-navigation" id="siteNavigation">
      <ul>
        {navItems.map((item) => (
          <li>
            <Link to={item.url}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
