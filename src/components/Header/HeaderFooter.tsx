import React from "react";
import tw from "twin.macro";
import useSocialLinks from "../../hooks/useSocialLinks";

const HeaderFooter = () => {
  const socialLinks = useSocialLinks();

  return (
    <footer>
      <ul css={[tw`flex justify-between items-center mb-8`]}>
        {socialLinks.map((link) => (
          <li>
            <a
              href={link.url}
              target="_blank"
              rel="nofollow referrer"
              css={[
                tw`flex justify-center items-center border-black border-[3px] w-10 h-10
                hover:(bg-black text-primary)
                focus:(bg-black text-primary)`,
              ]}
            >
              {link.icon}
              <span className="sr-only">
                Follow Michael Panik on {link.label}.
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p css={[tw`text-xs`]}>
        &copy; {new Date().getFullYear()}, Michael Panik.
      </p>
    </footer>
  );
};

export default HeaderFooter;
