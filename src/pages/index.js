import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <article class="hero">
        <section class="hero__text">
          <h1 class="hero__title">
            <sup>My name is</sup> Michael Panik.
          </h1>
          <p class="hero__subtitle">
            I use computers to make <Link to="/portfolio/">things</Link>.
          </p>
        </section>
        <div class="bg_image"></div>
      </article>
    </Layout>
  );
};

export default Index;
