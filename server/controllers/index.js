const { getMeals, postMeal, deleteMeal } = require('./meals');
const { getChefs, postChef , deleteChef} = require('./chefs');
const { getResturants, postResturant, deleteResturant} = require('./resturants');


module.exports = { getMeals, postMeal, deleteMeal,getChefs, postChef,deleteChef, getResturants, postResturant, deleteResturant};