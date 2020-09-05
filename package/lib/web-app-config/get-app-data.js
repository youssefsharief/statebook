const fs = require('fs').promises;
const { join }  = require('path')

module.exports = async (directoryPath) => {
    const filenames = await fs.readdir(directoryPath).catch(err => console.log('Unable to scan directory: ' + err))
    const obj = {}
    const promises = filenames.map(filename =>
        fs.readFile(join(directoryPath, filename), 'utf-8').then(content => obj[filename.substring(0, filename.length - 5)] = JSON.parse(content))
    )
    await Promise.all(promises)
    return obj
}



