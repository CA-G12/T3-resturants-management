const { deleteById } = require('../../database/queries/index');

const deleteResturant = (req, res) => {
  console.log(req.params.id, 'in req.param');
  const resturantId = req.params.id;
  deleteById('resturants', resturantId).then(res.redirect('/')).catch((erorr) => console.log(erorr));
};

module.exports = deleteResturant;
