const router = require('express').Router();
const {
  getChefs,postChef, deleteChef
} = require('../controllers');
console.log("1");
router.route('/').get(getChefs).post(postChef);
router.delete('/delete-chef/:id',deleteChef );


module.exports = router;
