import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql } from "gatsby";
import React from "react";
import tw from "twin.macro";
import { Layout } from "../components/Layout";
import { StyledLink } from "../components/Link";

const Projects = ({ data }) => {
  const projects = data.allSanityProject.nodes;

  return (
    <Layout>
      <h1 css={[tw`mb-8`]}>Projects</h1>
      <p css={[tw`mb-12`]}>
        Here's a collection of small pet projects I've built, started, or
        abandoned. Check out my more professional work over in my{" "}
        <StyledLink href="/portfolio" primary>
          portfolio
        </StyledLink>
        .
      </p>
      <ul>
        {projects.map(({ title, description, url }) => (
          <li css={[tw`mb-8`]}>
            <StyledLink href={url} primary css={[tw`font-bold`]}>
              {title} <FontAwesomeIcon icon={faExternalLink} size="xs" />
            </StyledLink>{" "}
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  {
    allSanityProject {
      nodes {
        title
        url
        description
      }
    }
  }
`;

export default Projects;
