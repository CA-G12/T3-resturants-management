const connection = require('../config/connection');

const deleteById = (table, id) => connection.query( `DELETE FROM ${table} WHERE id = ${id};`);

module.exports = deleteById;
