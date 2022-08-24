const router = require('express').Router();
const {
  getChefs,
} = require('../controllers');
console.log("1");
router.route('/').get(getChefs);
console.log("2");

module.exports = router;
