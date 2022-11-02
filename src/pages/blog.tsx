import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { BlogList } from "../components/Blog";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const BlogArchivePage = ({ data }) => {
  const [categoriesListOpen, setCategoriesListOpen] = useState<boolean>(false);
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
    <Layout fluid>
      <div css={[tw`flex justify-between items-center mb-12`]}>
        <h1>Blog</h1>
        <div css={[tw`relative`]}>
          <button
            css={[tw`lg:(hidden)`]}
            onClick={() => setCategoriesListOpen(!categoriesListOpen)}
          >
            Categories <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div
            css={[
              tw`pointer-events-none md:pointer-events-auto opacity-0 transform translate-y-4 transition absolute flex flex-col right-0 top-[100%] bg-white z-40 p-4 rounded-lg shadow-lg w-60 lg:(w-auto opacity-100 block static bg-none shadow-none p-0 translate-y-0)`,
              categoriesListOpen &&
                tw`opacity-100 translate-y-0 pointer-events-auto`,
            ]}
          >
            {["All", ...categories].map((category) => (
              <button
                onClick={() => {
                  setFilter(category);
                  setCategoriesListOpen(false);
                }}
                css={[
                  tw`text-left py-2 lg:(text-sm ml-6 p-0)`,
                  filter === category && tw`font-bold text-secondary`,
                ]}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div css={[tw`grid lg:(grid-cols-3) col-gap-6 row-gap-24`]}>
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
