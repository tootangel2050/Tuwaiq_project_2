const {users} = require("../../../backend/routers/dbUser");

const getAllUsers = (req,res)=>{
    res.send(users);
};

const getUser = (req,res)=>{
    // console.log(typeof user)
    const foundUser = users.filter((elem, i) => {
        return i == req.params.id 
    })
    if(foundUser.length > 0){
        res.send(foundUser[0])
        return
        }
        res.status(404).send("user not found")
}

    
    const addNewUser = (req,res)=>{
        const addedUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isAdmin:req.body.isAdmin,
        }
    
        users.push(addedUser)
    
        res.status(201).send(addedUser);
    }

    const updateUser = (req,res)=>{
        const usersId = req.query.id
        users.forEach((elem,i)=>{
            if(i == usersId){
                elem.name = req.body.name;
                elem.email = req.body.email;
                elem.password = req.body.password;
                elem.isAdmin = req.body.isAdmin;
                res.send(elem);
            }
        })
        
    }

module.exports = {getAllUsers , getUser, addNewUser , updateUser};