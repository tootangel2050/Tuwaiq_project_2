const { cancellesTest } = require("../cancellesTestDb");

const getAllCancellesTest = (req, res) => {
  res.send(cancellesTest);
};
const getcancellesTest = (req, res) => {
  const foundcancellesTest = cancellesTest.filter(({ nationalID }) => {
    return nationalID == req.params.id;
  });

  if (foundcancellesTest.length > 0) {
    res.send(foundcancellesTest);
    return;
  }
  res.status(404).send("registeredTest not found");
};
module.exports = {
  getAllCancellesTest,
  getcancellesTest,
};
