const { runner } = require('hygen')
const fs = require('fs')
const Logger = require('hygen/lib/logger')
const path = require('path')
const defaultTemplates = path.join(__dirname, 'templates')

const opts = {
    templates: defaultTemplates,
    cwd: process.cwd(),
    logger: new Logger(console.log.bind(console)),
    createPrompter: () => require('enquirer'),
    exec: (action, body) => {
        const opts = body && body.length > 0 ? { input: body } : {}
        return require('execa').shell(action, opts)
    },
    debug: !!process.env.DEBUG
}

module.exports = (dir) => {
    fs.readdir(dir, (err, files) => {
        if (err) throw err
        files.forEach(file => runner(`preview new ${file.substring(0, file.length - 5)}`, opts))
    })
}
