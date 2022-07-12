import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import tw from "twin.macro";

const CodeBlock = ({ value }) => {
  if (!value || !value.code) {
    return null;
  }
  const { language, code } = value;
  return (
    <SyntaxHighlighter
      language={language || "text"}
      showLineNumbers
      style={atomOneDark}
      css={[tw`mb-4`]}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
