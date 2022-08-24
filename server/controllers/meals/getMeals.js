const { getMealsFromDB } = require('../../database/queries/index');

const getMeals = (req, res) => {
  console.log('hello');
  getMealsFromDB().then((data) => console.log(data.rows)).catch((erorr) => console.log(erorr));
};

module.exports = getMeals;
