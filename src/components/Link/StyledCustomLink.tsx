import styled from "@emotion/styled";
import tw from "twin.macro";
import { Link } from "gatsby";

const StyledLinkA = styled.a(({ primary, dark, inverse }) => [
  tw`transition duration-150`,
  dark &&
    `&:hover,
  &:focus {
    box-shadow: inset 0 0 #fff,inset 0 -.65em rgba(0, 138, 113, .51);
  }`,
  primary &&
    `box-shadow: inset 0 0 #fff,inset 0 -.45em rgba(102,230,207,.7);

  &:hover,
  &:focus {
    background: rgba(102,230,207,.7);
    box-shadow: inset 0 0 #fff,inset 0 -.45em transparent;
  }`,
  inverse &&
    `box-shadow: inset 0 0 transparent, inset 0 -0.45em rgb(33 40 39 / 70%);

  &:hover,
  &:focus {
    background: rgba(33,40,39,.7);
    color: #5be2c2;
    box-shadow: inset 0 0 transparent, inset 0 -0.45em transparent;
  }`,
]);
const StyledLink = StyledLinkA.withComponent(Link);

const StyledCustomLink = ({ href, children, ...remainingProps }) => {
  if (href?.startsWith("/")) {
    return (
      <StyledLink to={href} {...remainingProps}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledLinkA href={href} {...remainingProps} target="_blank">
      {children}
    </StyledLinkA>
  );
};

export default StyledCustomLink;
