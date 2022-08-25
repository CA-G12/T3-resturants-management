const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('./config/connection');

function build() {
  const sql = readFileSync(join(__dirname, 'data.sql')).toString();

  return connection.query(sql);
}

module.exports = build;