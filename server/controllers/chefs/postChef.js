const { addChef } = require('../../database/queries/index');

const postChef = (req, res) => {
  console.log(req.body);
  const {name, resturant_id} = req.body;
  addChef(name, resturant_id).then((data) =>res.redirect('/')).catch((erorr) => console.log(erorr));
};

module.exports = postChef;
