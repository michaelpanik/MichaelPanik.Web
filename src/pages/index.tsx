import { Link } from "gatsby";
import React from "react";
import { Layout } from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <article className="hero">
        <section className="hero__text">
          <h1 className="hero__title">
            <sup>My name is</sup> Michael Panik.
          </h1>
          <p className="hero__subtitle">
            I use computers to make <Link to="/portfolio/">things</Link>.
          </p>
        </section>
        <div className="bg_image"></div>
      </article>
    </Layout>
  );
};

export default HomePage;
