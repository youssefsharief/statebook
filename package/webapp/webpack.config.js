const HtmlWebPackPlugin = require("html-webpack-plugin");
const { resolve, join } = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')
const getAppData = require('./config/get-app-data')
const dotenvConfig = dotenv.config().parsed

module.exports = async () => {
  const appData = await getAppData(dotenvConfig.IS_DEVELOPING_PACKAGE ? join('secondaryApp', 'fixtures'): join('src', 'fixtures'))
  return {
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
        APP_DATA: JSON.stringify(appData),
      }),
    ]
  };
} 