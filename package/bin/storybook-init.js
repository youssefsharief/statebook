#!/usr/bin/env node

const child_process = require('child_process');

const addHygenFiles = require('../lib/scripts/add-hygen-files');

addHygenFiles('storybook')
child_process.execSync('npm install hygen', { stdio: [0, 1, 2] });
child_process.execSync('npx sb init', { stdio: [0, 1, 2] })


