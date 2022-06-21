import { PortableText } from "@portabletext/react";
import { graphql } from "gatsby";
import React from "react";
import tw from "twin.macro";
import { Layout } from "../components/Layout";
import { components } from "../blockContent";

const AboutPage = ({ data }) => {
  const { title, body } = data?.sanityAboutMePage;
  return (
    <Layout>
      <h1>{title}</h1>
      <PortableText value={body} components={components} />
    </Layout>
  );
};

export const query = graphql`
  {
    sanityAboutMePage {
      title
      body: _rawContent(resolveReferences: { maxDepth: 10 })
    }
  }
`;

export default AboutPage;
