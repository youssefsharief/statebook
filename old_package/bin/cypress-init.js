#!/usr/bin/env node

const fs = require('fs')
const shell = require('shelljs')
const { resolve } = require('path')
const copyHygenTemplate = require('../lib/scripts/copy-hygen-template');

function createCypressDirs() {
    fs.mkdirSync('./cypress/fixtures', { recursive: true });
    fs.mkdirSync('./cypress/integration', { recursive: true });
}

function injectStoreInWindowObject() {
    shell.sed('-i', 'render\\(', 'window.ST = store\nrender\(', 'src/index.js');
}

function addCypressJSON() {
    fs.copyFile(resolve(__dirname, `../lib/templates/cypress.json`), './cypress.json', (err) => {
        if (err) throw err;
        console.log('added cypress.json file')
    });
}

copyHygenTemplate('cypress')
createCypressDirs()
injectStoreInWindowObject()
addCypressJSON()