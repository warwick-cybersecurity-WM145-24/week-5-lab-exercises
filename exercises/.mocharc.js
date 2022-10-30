module.exports = {
  diff: true,
  parallel: true,
  recursive: true,
  require: ["chai"],
  extension: ["js"],
  package: "./package.json",
  reporter: "spec",
  timeout: 2000,
  ui: "bdd",
  "watch-files": ["routes/**/*.test.js", "test/**/*.js"],
  "watch-ignore": ["node_modules"],
  "trace-warnings": true //node flags ok
};
