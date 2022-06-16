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
    createPage({
      path: `blog/${post.slug.current}/`,
      component: path.resolve(`./src/templates/post.tsx`),
      context: post,
    });
  });

  return Promise.all([posts]);
};
