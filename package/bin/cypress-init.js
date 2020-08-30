#!/usr/bin/env node

const fs = require('fs')
const { resolve } = require('path')
const addHygenFiles = require('../lib/scripts/add-hygen-files');

fs.mkdirSync('./cypress/fixtures', { recursive: true });
fs.mkdirSync('./cypress/integration', { recursive: true });

fs.copyFile(resolve(__dirname, `../lib/templates/cypress.json`), './', (err) => {
    if (err) throw err;
    console.log('added cypress.json file')
});

addHygenFiles('cypress')
