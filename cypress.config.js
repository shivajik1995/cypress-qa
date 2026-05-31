const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');

const analyzeFailure = require('./scripts/analyzeFailure');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,

    setupNodeEvents(on, config) {

      on("task", {
  async aiAnalyze(data) {

    const result =
      await analyzeFailure(data);

    console.log("\n===== AI ANALYSIS =====\n");
    console.log(result);

    if (!fs.existsSync("ai-reports")) {
      fs.mkdirSync("ai-reports");
    }

    const reportName =
  `ai-reports/${data.testName.replace(/\s+/g, '-')}.md`;

    fs.writeFileSync(
      reportName,
      result
    );

    console.log(
      `Report Saved: ${reportName}`
    );

    return null;
  }
});

      const envFile =
        config.env.configFile || 'qa';

      const envPath =
        path.resolve(
          __dirname,
          'config',
          `cypress.env.${envFile}.json`
        );

      if (fs.existsSync(envPath)) {

        const envConfig =
          JSON.parse(
            fs.readFileSync(envPath, 'utf-8')
          );

        if (envConfig.baseUrl) {
          config.baseUrl = envConfig.baseUrl;
        }

        config.env = {
          ...config.env,
          ...envConfig
        };
      }

      return config;
    }
  }
});