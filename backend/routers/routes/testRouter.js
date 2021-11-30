const express = require('express');
const availableTestForRegistrationRouter = express.Router();
const cancelleTestRouter = express.Router();
const prevusRouter = express.Router();
const registeredTestsRouter = express.Router();
const resultedRouter = express.Router();
const testRouter = express.Router();

const {getAllResulteds,getresulted} = require("../controllers/resulted");
const {getAllRegisteredTestses , getregisteredTests } = require("../controllers/registeredTests");
const {getAllCancellesTest , getcancellesTest}= require("../controllers/cancellesTest");
const {getAllAvailableTestsForRegistration }= require("../controllers/availableTestsForRegistration");
const {getAllPrevuss ,getprevus}= require("../controllers/prevuss");


testRouter.get("/",getAllRegisteredTestses);
testRouter.get("/registeredTests/:id",getregisteredTests);


testRouter.get("/prevuss",getAllPrevuss );
testRouter.get("/prevus/:id",getprevus);
// // prevusRouter.get('/prevuss/:id',getPrevus);

testRouter.get("/result",getAllResulteds);
testRouter.get("/resulted/:id",getresulted);

testRouter.get("/cancelled",getAllCancellesTest);
testRouter.get("/Cancelled/:id",getcancellesTest);

testRouter.get("/available",getAllAvailableTestsForRegistration);



module.exports = {testRouter};


