const { getMeals, postMeal } = require('./meals');
const { getChefs, postChef } = require('./chefs');
const { getResturants, postResturant} = require('./resturants');


module.exports = { getMeals, postMeal, getChefs, postChef, getResturants, postResturant};

// const express = require('express');
// const {getMeals , postMeal} = require('../database/queries/')

// const router = express.Router();

// router.get( '/' , (req,res) => {
//     console.log("hello");
//     getMeals().then(data => console.log(data.rows)).catch((erorr) => console.log(erorr));
// })

// module.exports = router;
