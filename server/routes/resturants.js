const router = require('express').Router();
const {
  getResturants,postResturant, deleteResturant
} = require('../controllers');

router.route('/').get(getResturants).post(postResturant);
router.delete('/delete-resturant/:id',deleteResturant );

module.exports = router;
