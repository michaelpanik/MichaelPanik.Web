import { graphql } from "gatsby";
import Image from "gatsby-plugin-sanity-image";
import React from "react";
import tw from "twin.macro";
import { Layout } from "../components/Layout";
import { formatDate } from "../helpers";
import { PortableText } from "@portabletext/react";
import { components } from "../blockContent";

const BlogDetail = ({ data }) => {
  const { title, mainImage, categories, publishedAt, body } = data.sanityPost;
  return (
    <Layout noPadding>
      {mainImage ? (
        <Image
          {...mainImage.mainImage}
          width={1920}
          height={800}
          alt={mainImage.alt}
          config={{ quality: 95 }}
          css={[tw`w-full h-[100vh] object-cover`]}
        />
      ) : (
        <div css={[tw`w-full h-1/2 bg-gray-200`]} />
      )}
      <div css={[tw`-mt-80 mx-14 bg-white relative z-10 p-14`]}>
        {/* <small css={[tw`absolute bottom-[100%] left-0 text-xs py-2`]}>
          {mainImage.caption}
        </small> */}
        <h1 css={[tw`text-center mb-8`]}>{title}</h1>
        <p css={[tw`text-center text-gray-600 mb-14`]}>
          {formatDate(publishedAt)} |{" "}
          {categories.map((category) => category.title).join(",")}
        </p>
        <PortableText value={body} components={components} />
      </div>
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
