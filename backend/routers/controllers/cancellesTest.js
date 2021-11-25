const {cancellesTest} = require("../cancellesTestDb");

const getAllCancellesTest = (req, res) => {
  res.send(cancellesTest);
};

// const getCancelleTest = (req, res) => {
//   const foundCancelleTest = cancellesTest.filter((elem, i) => {
//     return i == req.params.id
//   });
//   if (foundCancelleTest.length > 0) {
//     res.send(foundCancelleTest[0]);
//     return;
//   }
//   res.status(404).send("no cancelle test found");
// };

// const addNewCancelleTest = (req, res) => {
//   const cancelledTest = {
//     name: req.body.name,
//     CenterOfficeLocation: req.body.CenterOfficeLocation,
//     Date: req.body.Date,
//     CancellationTime: req.body.CancellationTime,
//     TestTypeMechanism: req.body.TestTypeMechanism,
//     CancellationReason: req.body.CancellationReason
//   };
//   cancellesTest.push(cancelledTest);

//   res.status(201).send(cancelledTest);
// };
// const updateCancelleTest = (req, res) => {
//   const cancellesTestId = req.query.id;
//   cancellesTest.forEach((elem, i) => {
//     if (i == cancellesTestId) {
//       elem.name = req.body.name;
//       elem.CenterOfficeLocation = req.body.CenterOfficeLocation;
//       elem.Date = req.body.Date;
//       elem.CancellationTime = req.body.CancellationTime;
//       elem.TestTypeMechanism = req.body.TestTypeMechanism;
//       elem.CancellationReason = req.body.CancellationReason;
//       res.send(elem);
//     }
//   });
// };
module.exports = {
  getAllCancellesTest,
 
}
