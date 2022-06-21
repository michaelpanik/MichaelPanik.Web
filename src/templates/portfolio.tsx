import { graphql } from "gatsby";
import React from "react";
import tw from "twin.macro";
import { Layout } from "../components/Layout";

const BlogDetail = ({ data }) => {
  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    sanityPortfolio(id: { eq: $id }) {
      ...SanityPortfolioFragment
    }
  }
`;

export default BlogDetail;
