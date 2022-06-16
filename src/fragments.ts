import { graphql } from "gatsby";

export const AuthorFragment = graphql`
  fragment SanityAuthorFragment on SanityAuthor {
    name
    image {
      asset {
        gatsbyImageData
      }
    }
    bio {
      ...SanityBlockFragment
    }
  }
  `

export const ImageWithAltFragment = graphql`
fragment SanityImageWithAltAndCaptionFragment on SanityImageWithAltAndCaption {
    mainImage {
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
    author {
      ...SanityAuthorFragment
    }
    categories {
      title
    }
    slug {
      current
    }
    publishedAt
    body {
      ...SanityBlockFragment
    }
  }
  `

export const BlockFragment = graphql`
  fragment SanityBlockFragment on SanityBlock {
    children {
      text
    }
  }
  `





