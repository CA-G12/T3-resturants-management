const connection = require('../../config/connection');

const addChef = (name, resturant_id) => connection.query('INSERT INTO chefs (name, resturant_id) values ($1,$2)', [name, resturant_id]);

module.exports = addChef;
