const { addMeal } = require('../../database/queries/index');

const postMeal = (req, res) => {
  console.log(req.body);
  const {name, image, price, numOfPeople, chef_id} = req.body;
  addMeal(name, image, price, Number(numOfPeople), chef_id).then((data) =>res.redirect('/')).catch((erorr) => console.log(erorr));
};

module.exports = postMeal;
