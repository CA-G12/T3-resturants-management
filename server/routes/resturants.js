const router = require('express').Router();
const {
  getResturants,postResturant
} = require('../controllers');

router.route('/').get(getResturants).post(postResturant);

module.exports = router;
