// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
  },
  {
    rules: {
      // Existing screens load data in effects; keep visible but non-blocking until refactored.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
]);
