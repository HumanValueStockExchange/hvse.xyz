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
        name: `gatsby-material-design-for-bootstrap`,
        short_name: `MDB starter`,
        start_url: `/`,
        background_color: `#4B5EB8`,
        theme_color: `#68008C`,
        display: `standalone`,
        icon: `${__dirname}/src/images/logos/logo.png`, // This path is relative to the root of the site.
      },
  ],
};
