const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')
const getAppData = require('./get-app-data')
const dotenvConfig = dotenv.config().parsed;


const isDevoloping = dotenvConfig && dotenvConfig.IS_DEVELOPING_PACKAGE 

module.exports = (mode) => {
    return new Promise(async (res, rej) => {
        const appData = await getAppData(isDevoloping ? path.join('secondaryApp', 'fixtures') : path.join('src', 'fixtures'))
        const configObject = {
            mode,
            resolve: {
                alias: {
                    Templates: path.resolve(isDevoloping ? './secondaryApp/templates/': path.join(__dirname, 'src', 'templates' ) ),
                }
            },
            entry: path.resolve(isDevoloping ? `./webapp/src` : './src'),
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
                    template: path.resolve(isDevoloping ? `./webapp/src/index.html` : `./src/index.html`),
                    filename: "index.html"
                }),
                new webpack.DefinePlugin({
                    APP_DATA: JSON.stringify(appData),
                }),
            ]
        };
        return res(webpack(configObject))
    })
}


