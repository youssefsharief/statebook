const HtmlWebPackPlugin = require("html-webpack-plugin");
const { resolve } = require('path')
const fs = require('fs')
const webpack = require('webpack')
module.exports = {
  entry: resolve(__dirname, `./src`),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: resolve(__dirname, `./src/index.html`),
      filename: "index.html"
    }),
    new webpack.DefinePlugin({
      APP_DATA: JSON.stringify(fs.readdirSync('./secondaryApp/fixtures/'))
    }),

  ]
};