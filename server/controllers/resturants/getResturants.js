const { getResturantsFromDB } = require('../../database/queries/index');

const getResturants = (req, res) => {
  getResturantsFromDB().then((data) => res.json(data.rows)).catch((erorr) => console.log(erorr));
};

module.exports = getResturants;
