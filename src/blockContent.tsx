import React from "react";
import tw from "twin.macro";
import { StyledLink } from "./components/Link";

export const components = {
  block: {
    h2: ({ children }) => <h2 css={[tw`mb-4 mt-10`]}>{children}</h2>,
    h3: ({ children }) => (
      <h3 css={[tw`text-secondary mb-3 mt-8`]}>{children}</h3>
    ),
    normal: ({ children }) => <p css={[tw`mb-8 leading-loose `]}>{children}</p>,
  },
  marks: {
    big: ({ children, value }) => <big css={[tw`text-2xl`]}>{children}</big>,
    link: ({ children, value }) => (
      <StyledLink
        href={value.href}
        primary={value.style === "primary" || !value.style}
        dark={value.style === "dark"}
        inverse={value.style === "inverse"}
      >
        {children}
      </StyledLink>
    ),
    blockquote: ({ children, value }) => (
      <>
        <div css={[tw`border-2 mx-auto w-1/12 mb-12 mt-24`]} />
        <blockquote css={[tw`mx-auto text-center w-5/12`]}>
          <p css={[tw`text-5xl mb-8 font-display`]}>&ldquo;{children}&rdquo;</p>
          <cite css={[tw`not-italic`]}>{value.cite}</cite>
        </blockquote>
        <div css={[tw`border-2 mx-auto w-1/12 mt-12 mb-24`]} />
      </>
    ),
  },
};
