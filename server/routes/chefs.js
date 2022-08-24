const router = require('express').Router();
const {
  getChefs,postChef
} = require('../controllers');
console.log("1");
router.route('/').get(getChefs).post(postChef);
console.log("2");

module.exports = router;
