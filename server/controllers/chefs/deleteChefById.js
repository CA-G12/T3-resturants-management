const { deleteById } = require('../../database/queries/index');

const deleteChef = (req, res) => {
  console.log(req.params.id, 'in req.param');
  const chefId = req.params.id;
  deleteById('chefs', chefId).then(res.redirect('/')).catch((erorr) => console.log(erorr));
};

module.exports = deleteChef;
