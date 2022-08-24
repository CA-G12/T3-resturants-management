const router = require('express').Router();
const {
  getResturants,
} = require('../controllers');

router.route('/').get(getResturants);

module.exports = router;
