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
        console.log("object")
        const addedUser = {
            name: req.body.name,
            NationalID: req.body.NationalID,
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
                elem.NationalID = req.body.NationalID;
                elem.password = req.body.password;
                elem.isAdmin = req.body.isAdmin;
                res.send(elem);
            }
        })
        
    }

    // app.delete('/delete/:name',(req, res)=>{
    //     const foundProduct = products.find(elem=> elem.name == req.params.name)
    // // if(!foundProduct) return res.status(404).send('the name was not found.');
    // const index = products.indexOf(foundProduct);
    
    // products.splice(index, 1);
    // res.send(foundProduct);
    // });
    

module.exports = {getAllUsers , getUser, addNewUser , updateUser};