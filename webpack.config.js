const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",

  output: {
    path: path.resolve(__dirname, "docs"),
  },

  plugins: [new webpack.ProgressPlugin()],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
