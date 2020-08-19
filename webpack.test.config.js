const path = require("path");

module.exports = {
  entry: "./test/test.js",
  mode: "development",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "test/dist"),
  },
};
