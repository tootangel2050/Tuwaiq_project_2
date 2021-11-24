const express = require("express");
const availableTestForRegistrationRouter = express.Router();

const {getAllAvailableTestsForRegistration, getAvailableTestForRegistration,updateAvailableTestForRegistration,addNewAvailableTestForRegistration}= require("../controllers/availableTestsForRegistration");

availableTestForRegistrationRouter.get("/",getAllAvailableTestsForRegistration);
availableTestForRegistrationRouter.get('/AvailableTestsForRegistration/:id',getAvailableTestForRegistration);
availableTestForRegistrationRouter.post('/AvailableTestsForRegistration',addNewAvailableTestForRegistration);
availableTestForRegistrationRouter.put('/AvailableTestsForRegistration',updateAvailableTestForRegistration);


module.exports ={availableTestForRegistrationRouter};