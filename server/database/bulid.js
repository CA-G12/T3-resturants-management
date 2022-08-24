const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('./config/connection');

const sql = readFileSync(join(__dirname, 'data.sql')).toString();

connection
  .query(sql)
  .then(() => console.log('build created successfully!'))
  .catch((e) => console.error('failed to build', e.stack));
