import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { BlogList } from "../components/Blog";
import tw from "twin.macro";

const BlogArchivePage = ({ data }) => {
  const sortByPublishedDate = (a, b) =>
    new Date(a.publishedAt).getTime() > new Date(b.publishedAt).getTime()
      ? -1
      : 0;

  const posts = data?.allSanityPost?.nodes;
  const [filteredPosts, setFilteredPosts] = useState(
    posts.sort(sortByPublishedDate)
  );
  const [filter, setFilter] = useState("All");

  const categories = data?.allSanityCategory?.nodes.map(
    (category) => category.title
  );

  useEffect(() => {
    if (!filter) return;

    if (filter === "All") {
      return setFilteredPosts(posts);
    }

    const filteredPosts = posts.filter((post) => {
      return post.categories.some((c) => {
        console.log("some", c.title == filter);
        return c.title == filter;
      });
    });
    setFilteredPosts(filteredPosts.sort(sortByPublishedDate));
  }, [filter]);

  return (
    <Layout>
      <div css={[tw`flex justify-between`]}>
        <h1 css={[tw`mb-12`]}>Blog</h1>
        <div>
          {["All", ...categories].map((category) => (
            <button
              onClick={() => setFilter(category)}
              css={[
                tw`text-sm ml-6`,
                filter === category && tw`font-bold text-secondary`,
              ]}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div css={[tw`grid grid-cols-3 col-gap-6 row-gap-24`]}>
        {filteredPosts.map((post) => {
          return <BlogList {...post} />;
        })}
      </div>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
    </Layout>
  );
};

export const query = graphql`
  {
    allSanityPost {
      nodes {
        title
        slug {
          current
        }
        publishedAt
        mainImage {
          ...SanityImageWithAltAndCaptionFragment
        }
        categories {
          title
        }
      }
    }
    allSanityCategory {
      nodes {
        title
      }
    }
  }
`;

export default BlogArchivePage;
