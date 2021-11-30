const { prevus } = require("../prevusDb");

const getAllPrevuss = (req, res) => {
  res.send(prevus);
};

const getprevus = (req, res) => {
  const foundprevus = prevus.filter(({ nationalID }) => {
    return nationalID == req.params.id;
  });

  if (foundprevus.length > 0) {
    res.send(foundprevus);
    return;
  }
  res.status(404).send("prevuss not found");
};

module.exports = { getAllPrevuss, getprevus };
