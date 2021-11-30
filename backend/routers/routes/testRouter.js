const express = require("express");
const testRouter = express.Router();

const { getAllResulteds, getresulted } = require("../controllers/resulted");
const {
  getAllRegisteredTestses,
  getregisteredTests,
} = require("../controllers/registeredTests");
const {
  getAllCancellesTest,
  getcancellesTest,
} = require("../controllers/cancellesTest");
const {
  getAllAvailableTestsForRegistration,
} = require("../controllers/availableTestsForRegistration");
const { getAllPrevuss, getprevus } = require("../controllers/prevuss");

testRouter.get("/", getAllRegisteredTestses);
testRouter.get("/registeredTests/:id", getregisteredTests);

testRouter.get("/prevuss", getAllPrevuss);
testRouter.get("/prevus/:id", getprevus);

testRouter.get("/result", getAllResulteds);
testRouter.get("/resulted/:id", getresulted);

testRouter.get("/cancelled", getAllCancellesTest);
testRouter.get("/Cancelled/:id", getcancellesTest);

testRouter.get("/available", getAllAvailableTestsForRegistration);

module.exports = { testRouter };
