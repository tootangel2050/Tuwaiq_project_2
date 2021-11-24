const express = require("express");
const prevusRouter = express.Router();

const {getAllPrevuss,getPrevus,addNewPrevus,updatePrevus}= require("../controllers/prevuss");
prevusRouter.get("/",getAllPrevuss);
prevusRouter.get('/prevuss/:id',getPrevus);
prevusRouter.post('/prevuss',addNewPrevus);
prevusRouter.put('/Prevuss',updatePrevus);


module.exports ={prevusRouter};