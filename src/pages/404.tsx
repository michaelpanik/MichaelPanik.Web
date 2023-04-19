import React from "react";
import { Layout } from "../components/Layout";
import SEO from "../components/Seo";

const ErrorPage = () => {
  return <Layout>404: Page Not Found</Layout>;
};

export const Head = () => {
  return <SEO title="404: Page Not Found" />;
};

export default ErrorPage;
