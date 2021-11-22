const express = require("express");
const userRouter = express.Router();

const {getAllUsers, getUser,updateUser,addNewUser}= require("../controllers/users");
userRouter.get("/",getAllUsers);
userRouter.get('/users/:id',getUser);
userRouter.post('/users',addNewUser);
userRouter.put('/users',updateUser);


module.exports ={userRouter};