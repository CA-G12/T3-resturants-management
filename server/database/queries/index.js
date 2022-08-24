const deleteById = require('./deleteById');
const { getMealsFromDB, addMeal } = require('./meals');
const { getResturantsFromDB } = require('./resturants');
const { getChefsFromDB } = require('./chefs');

module.exports = { deleteById, getMealsFromDB, addMeal, getChefsFromDB, getResturantsFromDB };
