const fs = require('fs');
const info = require('../package.json');
const path = require('path');

info.name = 'fastyarn';

fs.writeSyncSync(path.join(__dirname, '../package.json'), JSON.stringify(info), 'utf-8');
