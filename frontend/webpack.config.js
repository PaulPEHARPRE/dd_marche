const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(ts|tsx)?$/,
        use: {
          loader: 'ts-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      /*Choose only one of the following two: if you're using 
      plain CSS, use the first one, and if you're using a
      preprocessor, in this case SASS, use the second one*/
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use:[
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
    ], 
  },  
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".less"]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "index.html"
    }),
  ]
}