const gatsbyConfig = require(`./gatsby-config.js`)
const path = require(`path`)

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

