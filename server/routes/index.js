const router = require('express').Router();
const mealsRouter = require('./meals');

router.use('/meals', mealsRouter);

module.exports = router;
