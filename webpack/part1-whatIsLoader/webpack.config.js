/*
 * @Date: 2022-10
 * @LastEditors: wfj
 * @LastEditTime: 2022-10
 * @Description:
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: {
          loader: path.resolve(__dirname, "../json-loader/index.js"),
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};
