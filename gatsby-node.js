const gatsbyConfig = require(`./gatsby-config.js`);
const path = require(`path`);
const messages = require("./i18n-translations.json");
const {languages} = require("./src/i18n");
const {defaultLanguage} = require("./src/i18n");

exports.onCreatePage = async ({page, actions}) => {
  const {createPage, deletePage} = actions;
  return new Promise((resolve) => {
    let path = page.path;
    deletePage(page);

    for (let language of languages) {
      const isDefaultLanguage = language === defaultLanguage;
      if (!isDefaultLanguage) {
        path = '/' + language + page.path;
      }

      const pageForLanguage = Object.assign({}, page, {
        originalPath: page.path,
        path: path,
        context: {
          language,
          messages: messages[language]
        }
      });
      createPage(pageForLanguage)
    }
    resolve()
  })
};

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
