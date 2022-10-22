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
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ],
            plugins: ['babel-plugin-annotate-console-log']
          }
        }
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};
