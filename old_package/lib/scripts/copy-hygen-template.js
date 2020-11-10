const fs = require('fs');
const templatedDir = './_templates';
const { resolve } = require('path')

module.exports = (fileName) => {
    fs.mkdirSync(templatedDir + '/preview/new', { recursive: true });

    fs.copyFile(resolve(__dirname, `../templates/${fileName}.ejs`), templatedDir + '/preview/new/state.ejs', (err) => {
        if (err) throw err;
        console.log('created hygen story generator')
    });
}