import React from "react";
import useSocialLinks from "../../hooks/useSocialLinks";

const HeaderFooter = () => {
  const socialLinks = useSocialLinks();

  return (
    <footer>
      <ul className="social">
        {socialLinks.map((link) => (
          <li className="social__link">
            <a href={link.url} target="_blank" rel="nofollow referrer">
              {link.icon}
              <span className="sr-only">
                Follow Michael Panik on {link.label}.
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="copyright">
        &copy; {new Date().getFullYear()}, Michael Panik.
      </p>
    </footer>
  );
};

export default HeaderFooter;
