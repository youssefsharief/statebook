const fs = require('fs')
const getStateData = (folderName) => fs.readdirSync(folderName)


module.exports = { getStateData }

