// Add code below to connect to your database
const { Pool } = require('pg');
require('env2')('.env');

const { DB_TEST_URL, DATABASE_URL, NODE_ENV } = process.env;
let URL = '';
if (NODE_ENV == 'test') {
  console.log('test url is done .');
  URL = DB_TEST_URL;
} else if (NODE_ENV == 'production') {
  console.log('PRODUCTION url is done .');
  URL = DATABASE_URL;
} else {
  throw new Error('URL_error');
}

const pool = new Pool({
  connectionString: URL,
  ssl: NODE_ENV !== 'production' ? false : { rejectUnauthorized: false },
});

module.exports = pool;
