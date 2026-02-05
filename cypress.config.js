const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "d2wa9i",
  e2e: {
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: false,
    timestamp: 'mmddyyyy_HHMMss'
  }
});
