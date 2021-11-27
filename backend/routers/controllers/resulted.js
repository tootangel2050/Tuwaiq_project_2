const { resulted } = require("../resulteDb");

const getAllResulteds = (req, res) => {
  res.send(resulted);
};

module.exports = { getAllResulteds };
