const cypress = require("cypress");
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config){
  // this is required for the preprocessor to be able to generate JSON reports after
  await preprocessor.addcucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // make sure to return config object as it might have been modified by the plugin
   return config;
}

module.exports = defineConfig({
  projectId: 'xo3eci',
//  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
//  pageLoadTimeout: 30000,
//  reporter: 'mochawesome',
  env: {
    url: 'https://rahulshettyacademy.com',
  },
  retries: {
    runMode: 1,
    },
  projectId: "254s74",
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
});
