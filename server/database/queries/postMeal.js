const connection = require('../config/connection');

const postMeal = (name, image, price, numofPeople, chef_id) => connection.query('INSERT INTO meals (name,image, price, numofPeople, chef_id) values ($1,$2,$3,$4,$5)', [name, image, price, numofPeople, chef_id]);

module.exports = postMeal;
