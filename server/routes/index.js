const router = require('express').Router();
const mealsRouter = require('./meals');
const chefsRouter = require('./chefs');
const resturantsRouter = require('./resturants');


router.use('/meals', mealsRouter);
router.use('/chefs', chefsRouter);
router.use('/resturants', resturantsRouter);


module.exports = router;
