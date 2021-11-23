const express = require("express");
const cancelleTestRouter = express.Router();

const {getAllCancellesTest,getCancelleTest, addNewCancelleTest,updateCancelleTest}= require("../controllers/cancellesTest");
cancelleTestRouter.get("/",getAllCancellesTest);
cancelleTestRouter.get('/cancellesTest/:id',getCancelleTest);
cancelleTestRouter.post('/cancellesTest',addNewCancelleTest);
cancelleTestRouter.put('/cancellesTest',updateCancelleTest);


module.exports ={cancelleTestRouter};