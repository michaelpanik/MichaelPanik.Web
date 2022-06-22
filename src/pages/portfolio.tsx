import { graphql, Link } from "gatsby";
import Image from "gatsby-plugin-sanity-image";
import React from "react";
import tw from "twin.macro";
import { Layout } from "../components/Layout";

const PortfolioPage = ({ data }) => {
  const portfolioItems = data?.allSanityPortfolio?.nodes;

  return (
    <Layout noPadding>
      <div css={[tw`sticky top-0 h-0 z-20`]}>
        <h1 css={[tw`text-white left-0 pl-14 pt-32`]}>Portfolio</h1>
      </div>
      <div>
        {portfolioItems.map(({ slug, title, featuredImage, excerpt }, i) => (
          <section
            css={[
              tw`bg-primary border-b h-screen relative`,
              i % 2 === 0 && tw`bg-secondary`,
            ]}
          >
            {featuredImage && (
              <Image
                {...featuredImage}
                width={1920}
                height={1080}
                css={[
                  tw`w-full h-screen grayscale mix-blend-multiply opacity-50`,
                ]}
              />
            )}
            <Link
              to={`/portfolio/${slug?.current}`}
              css={[
                tw`absolute block p-8 bg-white right-8 bottom-8 w-1/2 rounded-lg transition hover:(shadow-xl -translate-y-2) focus:(shadow-xl -translate-y-2)`,
              ]}
            >
              <h2 css={[tw`mb-4`]}>{title}</h2>
              <p>{excerpt}</p>
              <p css={[tw`text-right text-secondary`]}>Read More ›</p>
            </Link>
          </section>
        ))}
      </div>
    </Layout>
  );
};

export const data = graphql`
  {
    allSanityPortfolio {
      nodes {
        slug {
          current
        }
        title
        featuredImage {
          ...SanityGatsbyImage
        }
        excerpt
      }
    }
  }
`;

export default PortfolioPage;
