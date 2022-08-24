const deleteById = require('./deleteById');
const { getMealsFromDB, addMeal } = require('./meals');
const { getResturantsFromDB, addResturant } = require('./resturants');
const { getChefsFromDB, addChef } = require('./chefs');

module.exports = { deleteById, getMealsFromDB, addMeal, getChefsFromDB, addChef, getResturantsFromDB, addResturant };
