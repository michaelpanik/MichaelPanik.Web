import { Global } from "@emotion/react";
import { GlobalStyles as TWGlobalStyles } from "twin.macro";
import { customGlobalStyles } from "./";

const GlobalStyles = () => {
  return (
    <>
      <TWGlobalStyles />
      <Global styles={customGlobalStyles} />
    </>
  );
};

export default GlobalStyles;
