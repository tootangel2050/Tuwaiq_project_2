const express = require("express");
const userRouter = express.Router();
const { users } = require("../dbUser");

const {getAllUsers, getUser,updateUser,addNewUser}= require("../controllers/users");
userRouter.get("/",getAllUsers);
userRouter.post('/login/',getUser);
userRouter.post('/signUp/',addNewUser);
userRouter.put('/users',updateUser);


module.exports ={userRouter};


// const express = require("express");
// const userRouter = express.Router();
// const {getUser,getAllUser,updateUser,addNewUser,} = require("../controllers/user");
// const { users } = require("../db");
// userRouter.get('/',getAllUser);
// userRouter.post('/',getUser);
// userRouter.post('/user',addNewUser);
// userRouter.put('/user',updateUser);
// module.exports={userRouter};