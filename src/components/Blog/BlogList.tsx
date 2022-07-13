import React from "react";
import Image from "gatsby-plugin-sanity-image";
import { formatDate } from "../../helpers";
import tw from "twin.macro";
import { Link } from "../Link";

const BlogList = ({ mainImage, title, publishedAt, slug, categories }) => {
  return (
    <a
      href={`/blog/${slug.current}`}
      css={[
        tw`flex flex-col shadow-lg rounded-lg overflow-hidden transition hover:(shadow-2xl -translate-y-2) focus:(shadow-2xl -translate-y-2)`,
      ]}
    >
      <div>
        {mainImage && (
          <Image
            {...mainImage.mainImage}
            css={[tw`w-full h-48 object-cover`]}
            width={800}
            height={450}
          />
        )}
      </div>
      <div css={[tw`p-6 flex flex-col justify-between h-full`]}>
        <h2 css={[tw`normal-case text-3xl mb-2 h-[6em]`]}>
          <span
            css={[
              `box-shadow: inset 0 0 #fff,inset 0 -.45em rgba(102,230,207,.7);`,
            ]}
          >
            {title}
          </span>
        </h2>
        <div css={[tw`text-gray-400 text-xs flex justify-between`]}>
          <span>{categories[0].title}</span>
          <time>{formatDate(publishedAt)}</time>
        </div>
      </div>
    </a>
  );
};

export default BlogList;
