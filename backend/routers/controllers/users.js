const users = require("../../../backend/routers/dbUser");
const getAllUsers = (req,res)=>{
    res.send(users);
};
module.exports = {getAllUsers};