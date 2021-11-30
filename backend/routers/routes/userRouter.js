const express = require("express");
const userRouter = express.Router();
const { users } = require("../dbUser");

const {
  getAllUsers,
  getUser,
  updateUser,
  addNewUser,
} = require("../controllers/users");
userRouter.get("/", getAllUsers);
userRouter.post("/login/", getUser);
userRouter.post("/signUp/", addNewUser);
userRouter.put("/users", updateUser);

module.exports = { userRouter };
