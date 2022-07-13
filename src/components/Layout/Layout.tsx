import React from "react";
import tw from "twin.macro";
import { GlobalStyles } from "../GlobalStyles";
import { Header } from "../Header";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const Layout = ({
  noPadding = false,
  fluid = false,
  children,
  ...remainingProps
}) => {
  return (
    <div css={[tw`lg:(grid grid-cols-5)`]} {...remainingProps}>
      <GlobalStyles />
      <Header />
      <main
        css={[
          tw`w-full max-w-3xl mx-auto px-8 py-12 lg:(relative px-14 pt-32 pb-16 col-span-4)`,
          noPadding && tw`max-w-none mx-0 p-0 lg:(p-0)`,
          fluid && tw`max-w-none mx-0`,
        ]}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
