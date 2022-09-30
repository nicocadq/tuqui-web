const createConfig = require("next/jest");

const helper = createConfig({
  dir: "./",
});

const customConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

module.exports = helper(customConfig);
