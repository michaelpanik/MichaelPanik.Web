import { PortableText } from "@portabletext/react";
import { graphql } from "gatsby";
import React from "react";
import tw from "twin.macro";
import { Layout } from "../components/Layout";
import { components } from "../blockContent";
import SEO from "../components/Seo";

const AboutPage = ({ data }) => {
  const { title, body } = data?.sanityAboutMePage;
  return (
    <Layout>
      <h1>{title}</h1>
      <PortableText value={body} components={components} />
    </Layout>
  );
};

export const Head = ({ data }) => {
  const { title } = data?.sanityAboutMePage;
  return <SEO title={title} />;
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
