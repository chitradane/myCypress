const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  defaultCommandTimeout: 6000, 
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
   video: true,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  
  env: {
    url: "https://rahulshettyacademy.com"
  },
  projectId: "vpr86k",
  e2e: {
    setupNodeEvents(on, config)
    {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern:'cypress/integration/examples/*.js'
  },
});


