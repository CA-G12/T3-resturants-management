const connection = require('../../config/connection');

const getResturants = () => connection.query('select * from resturants');

module.exports = getResturants;
