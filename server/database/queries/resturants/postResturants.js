const connection = require('../../config/connection');

const addResturant = (name, location) => connection.query('INSERT INTO resturants (name, location) values ($1,$2)', [name, location]);

module.exports = addResturant;
