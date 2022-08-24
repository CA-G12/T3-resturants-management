const { getMealsFromDB } = require('../../database/queries/index');

const getMeals = (req, res) => {
  getMealsFromDB().then((data) => res.json(data.rows)).catch((erorr) => console.log(erorr));
};

module.exports = getMeals;
