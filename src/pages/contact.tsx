import { graphql } from "gatsby";
import React from "react";
import { Layout } from "../components/Layout";
import { components } from "../blockContent";
import { PortableText } from "@portabletext/react";

const ContactPage = ({ data }) => {
  const { title, body } = data?.sanityContactPage;

  return (
    <Layout>
      <h1>{title}</h1>
      <PortableText value={body} components={components} />
    </Layout>
  );
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
