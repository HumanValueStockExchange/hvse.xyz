module.exports = {
    siteMetadata: {
        title: "HVSE",
        description: 'HVSE is a foundation which allows to bet on your success',
        siteUrl: `https://www.hvse.xyz`,
        author: 'the HVSE Foundation',
    },
    plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `News`,
        path: `${__dirname}/news`,
      }
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Human Value Stock Exchange",
        short_name: "HVSE",
        start_url: "/",
        background_color: "white",
        theme_color: "white",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/logos/logo.png" // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-react-helmet",
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-mathjax`,
      ],
    },
  },
  ],
};
