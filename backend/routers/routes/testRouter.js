const express = require('express');
const availableTestForRegistrationRouter = express.Router();
const cancelleTestRouter = express.Router();
const prevusRouter = express.Router();
const registeredTestsRouter = express.Router();
const resultedRouter = express.Router();
const testRouter = express.Router();

const {getAllResulteds} = require("../controllers/resulted");
const {getAllRegisteredTestses } = require("../controllers/registeredTests");
const {getAllCancellesTest}= require("../controllers/cancellesTest");
const {getAllAvailableTestsForRegistration }= require("../controllers/availableTestsForRegistration");
const {getAllPrevuss ,getprevus}= require("../controllers/prevuss");


testRouter.get("/",getAllRegisteredTestses);

testRouter.get("/prevuss",getAllPrevuss );
testRouter.get("/prevus/:id",getprevus);
// // prevusRouter.get('/prevuss/:id',getPrevus);

testRouter.get("/result",getAllResulteds);
testRouter.get("/cancelled",getAllCancellesTest);
testRouter.get("/available",getAllAvailableTestsForRegistration);



module.exports = {testRouter};


