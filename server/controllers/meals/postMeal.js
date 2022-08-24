const { addMeal } = require('../../database/queries/index');

const postMeal = (req, res) => {
  console.log('hello');
  addMeal().then((data) => console.log(data.rows)).catch((erorr) => console.log(erorr));
};

module.exports = postMeal;
