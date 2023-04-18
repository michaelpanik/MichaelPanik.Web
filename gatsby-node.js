const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const posts = await graphql(`
    {
      allSanityPost {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  posts.data.allSanityPost.nodes.forEach((post) => {
    if (post?.)
    createPage({
      path: `blog/${post?.slug?.current || post?.id}/`,
      component: path.resolve(`./src/templates/post.tsx`),
      context: post,
    });
  });

  const portfolioItems = await graphql(`
    {
      allSanityPortfolio {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  portfolioItems.data.allSanityPortfolio.nodes.forEach((portfolioItem) => {
    createPage({
      path: `portfolio/${portfolioItem?.slug?.current || portfolioItem?.id}/`,
      component: path.resolve(`./src/templates/portfolio.tsx`),
      context: portfolioItem,
    });
  });

  return Promise.all([posts, portfolioItems]);
};
