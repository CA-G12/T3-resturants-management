const connection = require('../config/connection');

const getMeals = () => connection.query('select * from meals');

module.exports = getMeals;
