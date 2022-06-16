require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Michael Panik",
    siteUrl: "https://michael-panik.com",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "asdf",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `uhgfo9o9`,
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
        overlayDrafts: process.env.NODE_ENV === "development",
      },
    },
    `gatsby-plugin-emotion`,
  ],
};
