import styled from "@emotion/styled";
import tw from "twin.macro";
import { Link } from "gatsby";

const CustomLink = ({ href, children, ...remainingProps }) => {
  if (href.startsWith("/")) {
    return (
      <Link to={href} {...remainingProps}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} {...remainingProps}>
      {children}
    </a>
  );
};

export default CustomLink;
