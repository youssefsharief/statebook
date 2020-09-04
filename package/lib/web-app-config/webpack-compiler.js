const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')
const getAppData = require('./get-app-data')
const dotenvConfig = dotenv.config().parsed;



module.exports = (mode) => {
    return new Promise(async (res, rej) => {
        const appData = await getAppData(dotenvConfig.IS_DEVELOPING_PACKAGE ? path.join('secondaryApp', 'fixtures') : path.join('src', 'fixtures'))
        const configObject = {
            mode,
            resolve: {
                alias: {
                    Templates: path.resolve(dotenvConfig.IS_DEVELOPING_PACKAGE ? './secondaryApp/templates/': path.join(__dirname, 'src', 'templates' ) ),
                }
            },
            entry: path.resolve(`./webapp/src`),
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
                    template: path.resolve(`./webapp/src/index.html`),
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


