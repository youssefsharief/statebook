#!/usr/bin/env node

const fs = require('fs').promises;
const { join } = require('path');

(async function() {
    dirPath = './src/fixtures'
    const filenames = await fs.readdir(dirPath).catch(err => console.log('Unable to scan directory: ' + err))
    filenames.forEach(async filename => {
        const content = await fs.readFile(join(dirPath, filename), 'utf-8')
        const state = JSON.parse(content)
        const url = '/'
        const appData = { url, state }
        await fs.writeFile(join(dirPath, filename), JSON.stringify(appData, null, 2), 'utf-8')
    })
})()


