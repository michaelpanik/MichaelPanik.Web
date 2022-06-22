import { graphql, Link } from "gatsby";
import Image from "gatsby-plugin-sanity-image";
import React from "react";
import tw from "twin.macro";
import { Layout } from "../components/Layout";
import { components } from "../blockContent";
import { PortableText } from "@portabletext/react";

const HomePage = ({ data }) => {
  const { crown, heading, subheading, heroImage } = data?.sanityHomePage;

  return (
    <Layout css={[tw`bg-primary`]} noPadding>
      <section css={[tw`flex items-center h-full relative z-20`]}>
        <div>
          <h1 css={[tw`uppercase text-[5rem] mb-6`]}>
            <sup css={[tw`lowercase font-normal block text-4xl -mb-6`]}>
              {crown}
            </sup>{" "}
            {heading}
          </h1>
          <PortableText value={subheading} components={components} />
        </div>
      </section>
      {heroImage && (
        <div
          css={[
            tw`absolute h-screen top-0 right-0 z-10`,
            `
            background: linear-gradient(
              74deg,
              #5ee2c3 0,
              #5ee2c3 25%,
              transparent 25%,
              transparent 75%,
              #5ee2c3 75%,
              #5ee2c3 100%
            );
            background-size: 100% 100%,cover;
    background-position: center,bottom right;
    background-repeat: no-repeat;
          `,
          ]}
        >
          <Image
            {...heroImage}
            width={800}
            css={[tw`h-full mix-blend-multiply`]}
          />
        </div>
      )}
    </Layout>
  );
};

export const query = graphql`
  {
    sanityHomePage {
      crown
      heading
      subheading: _rawSubheading
      heroImage {
        ...SanityGatsbyImage
      }
    }
  }
`;

export default HomePage;
