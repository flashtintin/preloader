const path = require("path");

module.exports = {
  entry: "./test/test.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "test/dist"),
  },
};
