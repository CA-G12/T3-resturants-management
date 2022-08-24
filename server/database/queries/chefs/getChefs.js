const connection = require('../../config/connection');

const getChefs = () => connection.query('select * from chefs');

module.exports = getChefs;
