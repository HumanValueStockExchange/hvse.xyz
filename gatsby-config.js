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
  ],
};
