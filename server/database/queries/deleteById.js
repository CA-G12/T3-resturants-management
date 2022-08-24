const connection = require('../config/connection');

const deleteById = (table, id) => connection.query('delete from $1 where id = $2', [table, id]);

module.exports = deleteById;
