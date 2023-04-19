import { graphql } from "gatsby";
import Image from "gatsby-plugin-sanity-image";
import React from "react";
import tw from "twin.macro";
import { Layout } from "../components/Layout";
import { formatDate } from "../helpers";
import { PortableText } from "@portabletext/react";
import { components } from "../blockContent";
import { Disqus } from "gatsby-plugin-disqus";
import SEO from "../components/Seo";

const BlogDetail = ({ data, location }) => {
  const { id, title, mainImage, categories, publishedAt, body, slug } =
    data.sanityPost;
  return (
    <Layout noPadding>
      {mainImage ? (
        <Image
          {...mainImage.mainImage}
          width={1920}
          height={800}
          alt={mainImage.alt}
          config={{ quality: 95 }}
          css={[tw`w-full object-cover h-[65vh] lg:(h-screen)`]}
        />
      ) : (
        <div css={[tw`w-full bg-gray-200 h-[65vh] lg:(h-screen)`]} />
      )}
      <div css={[tw`-mt-80 mx-14 bg-white relative z-10 px-6 py-12 lg:(p-20)`]}>
        {/* <small css={[tw`absolute bottom-[100%] left-0 text-xs py-2`]}>
          {mainImage.caption}
        </small> */}
        <div css={[tw`max-w-3xl mx-auto`]}>
          <h1 css={[tw`text-center mb-8`]}>{title}</h1>
          <p css={[tw`text-center text-gray-600 mb-14`]}>
            {formatDate(publishedAt)} |{" "}
            {categories.map((category) => category.title).join(",")}
          </p>
          <PortableText value={body} components={components} />
          <Disqus
            config={{
              url: `https://michael-panik.com${location.pathname}`,
              identifier: id,
              title: title,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export const Head = ({ data }) => {
  const { id, title, mainImage, categories, publishedAt, body, slug } =
    data.sanityPost;
  return (
    <SEO
      title={title}
      image={mainImage.mainImage.asset.gatsbyImageData.images.fallback.src}
    />
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
