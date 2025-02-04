const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Node event listeners if needed
    },
    supportFile: false, 
    specPattern: "cypress/e2e/**/*.cy.js", 
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
  experimentalFetchPolyfill: true
});
