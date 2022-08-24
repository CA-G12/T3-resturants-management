const connection = require('../../config/connection');

const getMeals = () => connection.query('select m.name,m.image, m.price, m.numofPeople, c.name AS "chef" , r.name AS "resturant" from meals m join chefs c on  (m.chef_id = c.id) join resturants r on(c.resturant_id = r.id) ;');

module.exports = getMeals;
