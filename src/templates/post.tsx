import { graphql } from "gatsby";
import Image from "gatsby-plugin-sanity-image";
import React from "react";
import { Layout } from "../components/Layout";
import { formatDate } from "../helpers";

const BlogDetail = ({ data }) => {
  const { title, mainImage, author, categories, publishedAt, body } =
    data.sanityPost;
  return (
    <Layout>
      <Image
        {...mainImage.mainImage}
        width={1920}
        height={1080}
        alt={mainImage.alt}
        config={{ quality: 95 }}
      />
      <small>{mainImage.caption}</small>
      <h1>{title}</h1>
      <p>
        {author.name} | {formatDate(publishedAt)} |{" "}
        {categories.map((category) => category.title).join(",")}
      </p>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      {/* <pre>{JSON.stringify(data.sanityPost, null, 2)}</pre> */}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    sanityPost(id: { eq: $id }) {
      ...SanityPostFragment
    }
  }
`;

export default BlogDetail;
