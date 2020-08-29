#!/usr/bin/env node
const fs = require('fs')
const addHygenFiles = require('../lib/scripts/add-hygen-files');

fs.mkdirSync('./cypress/fixtures', { recursive: true });
fs.mkdirSync('./cypress/integration', { recursive: true });

addHygenFiles('cypress')
