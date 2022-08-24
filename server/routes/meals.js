const router = require('express').Router();
const {
  getMeals, postMeal,
} = require('../controllers');

router.route('/').get(getMeals).post(postMeal);

module.exports = router;
