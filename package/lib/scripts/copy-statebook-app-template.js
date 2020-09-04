const fs = require('fs');
const { resolve } = require('path')

module.exports = () => {
    fs.mkdirSync('src/templates', { recursive: true });

    fs.copyFile(resolve(__dirname, `../templates/statebook-app-template.js`), './src/templates/statebook-app-template.js', (err) => {
        if (err) throw err;
        console.log('created s template')
    });
}