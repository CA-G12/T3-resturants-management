const connection = require('../../config/connection');

const getChefs = () => connection.query('select c.name , r.name AS resturants from chefs c join resturants r on (c.resturant_id =r.id)');

module.exports = getChefs;
