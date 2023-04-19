import { graphql } from "gatsby";
import React from "react";
import { Layout } from "../components/Layout";
import { components } from "../blockContent";
import { PortableText } from "@portabletext/react";
import SEO from "../components/Seo";

const ContactPage = ({ data }) => {
  const { title, body } = data?.sanityContactPage;

  return (
    <Layout>
      <h1>{title}</h1>
      <PortableText value={body} components={components} />
    </Layout>
  );
};

export const Head = ({ data }) => {
  const { title } = data?.sanityContactPage;
  return <SEO title={title} />;
};

export const query = graphql`
  {
    sanityContactPage {
      title
      body: _rawContent
    }
  }
`;

export default ContactPage;
