const createConfig = require("next/jest");

const helper = createConfig({
  dir: "./",
});

const customConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  testRegex: "(/tests/.*|(\\.|/)(test))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};

module.exports = helper(customConfig);
