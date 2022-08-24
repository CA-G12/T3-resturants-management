const { getChefsFromDB } = require('../../database/queries/index');

const getChefs = (req, res) => {
  console.log("3");
  getChefsFromDB().then((data) => res.json(data.rows)).catch((erorr) => console.log(erorr));
  console.log("4");
};

module.exports = getChefs;
