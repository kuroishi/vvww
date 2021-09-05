module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "v v w w ",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
