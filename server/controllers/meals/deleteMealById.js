const { deleteById } = require('../../database/queries/index');

const deleteMeal = (req, res) => {
    console.log(req.params.id, 'in req.param');
    const mealId = req.params.id;
      deleteById('meals', mealId).then(res.redirect('/')).catch((erorr) => console.log(erorr));
};

module.exports = deleteMeal;