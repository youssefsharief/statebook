#!/usr/bin/env node

const getCompiler = require('../lib/web-app-config/webpack-compiler');


(async function () {
    const compiler = await getCompiler('production')
    compiler.run((err, stats) => {
        console.log(stats.toString({
            chunks: true,
            colors: true
        }));
    });
})()


