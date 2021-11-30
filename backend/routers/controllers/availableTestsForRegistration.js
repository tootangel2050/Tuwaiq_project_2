const {
  AvailableTestsForRegistration,
} = require("../dbAvailableTestsForRegistration");

const getAllAvailableTestsForRegistration = (req, res) => {
  res.send(AvailableTestsForRegistration);
};

module.exports = { getAllAvailableTestsForRegistration };
