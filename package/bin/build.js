#!/usr/bin/env node
const child_process = require('child_process');
child_process.execSync('npm run build', { stdio: [0, 1, 2] });