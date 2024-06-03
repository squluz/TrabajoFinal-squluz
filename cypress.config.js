const { defineConfig } = require("cypress");
module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    env: {
      url: 'https://www.saucedemo.com/',
      qauser: 'standard_user',
      qapassword: 'secret_sauce',
      viewport: 'iphone-xr'
    },

  },
});
