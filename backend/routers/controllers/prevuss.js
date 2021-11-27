const { prevus } = require("../prevusDb");

const getAllPrevuss = (req, res) => {
  res.send(prevus);
};

module.exports = { getAllPrevuss };
