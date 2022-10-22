/*
 * @Date: 2022-10
 * @LastEditors: wfj
 * @LastEditTime: 2022-10
 * @Description:
 */
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
        test: /\.(jpg|png|jpeg)$/,
        use: {
          loader: "url-loader",
          options: {
            // 仅小于 25k 使用（大于25k默认用file-loader）
            limit: 25000,
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};
