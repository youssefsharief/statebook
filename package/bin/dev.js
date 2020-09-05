#!/usr/bin/env node

const webpackDevServer = require('webpack-dev-server');
const getCompiler = require('../lib/web-app-config/webpack-compiler');

(async function () {
    const compiler = await getCompiler('development')
    let server = new webpackDevServer(compiler, {
        open: true,
        port: 8080,
        publicPath: "/",
        historyApiFallback: true,
        stats: {
            // there were two other properties in this object which are cached and cachedAssets. Both were set to false
            colors: true,
        }
    })
    server.listen(8080)
})()


