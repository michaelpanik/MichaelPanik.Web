import React from "react";
import tw from "twin.macro";
import { GlobalStyles } from "../GlobalStyles";
import { Header } from "../Header";

const Layout = ({ noPadding = false, children, ...remainingProps }) => {
  return (
    <div css={[tw`lg:(grid grid-cols-5)`]} {...remainingProps}>
      <GlobalStyles />
      <Header />
      <main
        css={[
          tw`px-8 py-12 lg:(relative px-14 pt-32 pb-16 col-span-4)`,
          noPadding && tw`p-0 lg:(p-0)`,
        ]}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
