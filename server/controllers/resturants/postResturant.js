const { addResturant } = require('../../database/queries/index');

const postResturant = (req, res) => {
  console.log(req.body);
  const {name, location} = req.body;
  addResturant(name, location).then((data) =>res.redirect('/')).catch((erorr) => console.log(erorr));
};

module.exports = postResturant;
