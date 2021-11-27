const {cancellesTest} = require("../cancellesTestDb");

const getAllCancellesTest = (req, res) => {
  res.send(cancellesTest);
};
module.exports = {
  getAllCancellesTest,
 
}
