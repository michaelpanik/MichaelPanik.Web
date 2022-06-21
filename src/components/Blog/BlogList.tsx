import React from "react";
import Image from "gatsby-plugin-sanity-image";
import { formatDate } from "../../helpers";
import tw from "twin.macro";

const BlogList = ({ mainImage, title, publishedAt, slug }) => {
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
            css={[tw`w-full`]}
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
        <time css={[tw`text-gray-400 text-xs`]}>{formatDate(publishedAt)}</time>
      </div>
    </a>
  );
};

export default BlogList;
