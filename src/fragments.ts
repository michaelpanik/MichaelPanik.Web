import { graphql } from "gatsby";

export const ImageFragment = graphql`
  fragment SanityGatsbyImage on SanityImage {
    asset {
      gatsbyImageData
      _id
      metadata {
        preview: lqip
        palette {
          dominant {
            background
          }
        }
        dimensions {
          height
          width
        }
      }
    }
    hotspot {
      height
      width
      x
      y
    }
    crop {
      bottom
      left
      right
      top
    }
  }
  `

export const ImageWithAltFragment = graphql`
fragment SanityImageWithAltAndCaptionFragment on SanityImageWithAltAndCaption {
    mainImage {
      ...SanityGatsbyImage
    }
    alt
    caption
  }
  `

export const PostFragment = graphql`
  fragment SanityPostFragment on SanityPost {
    title
    mainImage {
      ...SanityImageWithAltAndCaptionFragment
    }
    categories {
      title
    }
    slug {
      current
    }
    publishedAt
    body: _rawBody(resolveReferences: {maxDepth: 10})
  }
  `

export const PortfolioFragment = graphql`
  fragment SanityPortfolioFragment on SanityPortfolio {
    title

  }
  `





