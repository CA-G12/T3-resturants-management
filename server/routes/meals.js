const router = require('express').Router();
const {
  getMeals, postMeal, deleteMeal
} = require('../controllers');

router.route('/').get(getMeals).post(postMeal);
router.delete('/delete-meal/:id', deleteMeal);

module.exports = router;
