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
const {getAllPrevuss}= require("../controllers/prevuss");


testRouter.get("/",getAllRegisteredTestses);
// registeredTestsRouter.get("./registeredTestses/:id" ,getRegisteredTests);
// registeredTestsRouter.post("./registeredTestses",addNewRegisteredTests);
// registeredTestsRouter.post("/registeredTestses",updateRegisteredTests);
testRouter.get("/prevuss",getAllPrevuss);
testRouter.get("/result",getAllResulteds);
testRouter.get("/cancelled",getAllCancellesTest);
testRouter.get("/available",getAllAvailableTestsForRegistration);
// resultedRouter.get("./resulteds/:id" ,getResulted);
// resultedRouter.post("./resulteds",addNewResulted);
// resultedRouter.post("/resulteds",updateResulted);





// cancelleTestRouter.get('/cancellesTest/:id',getCancelleTest);
// cancelleTestRouter.post('/cancellesTest',addNewCancelleTest);
// cancelleTestRouter.put('/cancellesTest',updateCancelleTest);

/* 
testRouter.get("/cancelledTests",getAll...)
*/






// availableTestForRegistrationRouter.get('/AvailableTestsForRegistration/:id',getAvailableTestForRegistration);
// availableTestForRegistrationRouter.post('/AvailableTestsForRegistration',addNewAvailableTestForRegistration);
// availableTestForRegistrationRouter.put('/AvailableTestsForRegistration',updateAvailableTestForRegistration);


module.exports = {testRouter};


