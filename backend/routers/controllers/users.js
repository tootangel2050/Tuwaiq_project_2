const { users } = require("../dbUser");

const getAllUsers = (req, res) => {
  res.send(users);
};

//- const getUser = (req, res) => {
//   const {NationalID, password , isAdmin} =req.body;
//   const foundUser = users.find((elem) => {
//     return (elem.NationalID == NationalId && elem.password == password && elem.isAdmin == isAdmin) 
//   });
//   if (foundUser) 
//     res.send(foundUser);
//     else
//     res.status(404).send("user not found");
//   };
  

// const getUser = (req, res) => {
//     // console.log(req.body)
//     // console.log(user);
//     const {email, password} = req.body;
//     // console.log("email sent:",email)
//     const foundUser = users.find( (elem) => {
//         // console.log("email in database:", elem.email)
//         return (elem.email == email && elem.password == password)} );
//       //console.log(foundUser);
//     if(foundUser)
//       res.send(foundUser);
//     else
//       res.status(404).send("We couldn’t find an account matching the email and password you entered. Please check and try again.");
//   };

const addNewUser = (req, res) => {
  console.log("object");
  const addedUser = {
    nationalID: req.body.nationalID,
    password: req.body.password };

  users.push(addedUser);

  res.status(201).send(addedUser);
};

//const addNewUser = (req,res)=>{
  //     const addedUser = {
  //         name: req.body.name,
  //         id: req.body.id,
  //         job: req.body.job,
  //         Tell: req.body.Tell,
  //         email: req.body.email,
  //         password: req.body.password,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  //         birthCity: req.body.birthCity,
  //         birthCountry: req.body.birthCountry,
  //         maritalStatus: req.body.maritalStatus,
  //         dateBrith: req.body.dateBrith,
  //         role: req.body.role
  //     }
  //     users.push(addedUser)
  //     res.status(201).send(addedUser);
  // }


const updateUser = (req, res) => {
  const usersId = req.query.id;
  users.forEach((elem, i) => {
    if (i == usersId) {
      elem.name = req.body.name;
      elem.NationalID = req.body.NationalID;
      elem.password = req.body.password;
      elem.isAdmin = req.body.isAdmin;
    
    }
  });
};// const updateUser = (req,res)=>{
  //     const userId = req.query.id
  //     users.forEach((elem,i)=>{
  //         if(i == userId){
  //             elem.name = req.body.name;
  //             elem.job = req.body.job;
  //             elem.Tell=req.body.Tell;
  //             elem.birthCity=req.body.birthCity;
  //             elem.birthCountry=req.body.birthCountry;
  //         }
  //     })
  // }
  
  // const userLogin=(req,res)=>{
  //     const loginUser = {
  //         NationalID: req.body.NationalID,
  //         Password: req.body.Password,
  //     }
  //     user.push(loginUser)
  //     res.status(201).send(loginUser)
  // }
  const registrUser = (req,res)=>{
      const NationalId = req.query.NationalID
      users.forEach((elem,i)=>{
          if(i == NationalId){
              elem.nationalID = req.body.NationalID;
              elem.password = req.body.Password;
              elem.dateOfBirth=req.body.DateOfBirth;
            
          }
      })
  }
   function getUser(req, res) {
console.log(req.body)
    const{nationalId,password}=req.body;
    const foundUser=users.find((elem)=>{
      return(elem.nationalID==nationalId&& elem.password==password)})
      if(foundUser)
      res.send(foundUser)

      else
      res.status(404).send("eroor")
    
   }
  // module.exports = {getAllUser,getUser,updateUser,addNewUser,registrUser, getPersonInfo}




module.exports = { getAllUsers, getUser, addNewUser, updateUser ,registrUser  };





// const express = require('express')
// const {users} = require('../db')
// // _________________________________________________________________________
//                 //  getUser
// // _________________________________________________________________________
// const getAllUser = (req,res)=>{
//     res.send(users)
// }
// const getUser = (req, res) => {
//     // console.log(req.body)
//     // console.log(user);
//     const {email, password} = req.body;
//     // console.log("email sent:",email)
//     const foundUser = users.find( (elem) => {
//         // console.log("email in database:", elem.email)
//         return (elem.email == email && elem.password == password)} );
//       //console.log(foundUser);
//     if(foundUser)
//       res.send(foundUser);
//     else
//       res.status(404).send("We couldn’t find an account matching the email and password you entered. Please check and try again.");
//   };
//   const addNewUser = (req,res)=>{
//     const addedUser = {
//         name: req.body.name,
//         id: req.body.id,
//         job: req.body.job,
//         Tell: req.body.Tell,
//         email: req.body.email,
//         password: req.body.password,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
//         birthCity: req.body.birthCity,
//         birthCountry: req.body.birthCountry,
//         maritalStatus: req.body.maritalStatus,
//         dateBrith: req.body.dateBrith,
//         role: req.body.role
//     }
//     users.push(addedUser)
//     res.status(201).send(addedUser);
// }
// const updateUser = (req,res)=>{
//     const userId = req.query.id
//     users.forEach((elem,i)=>{
//         if(i == userId){
//             elem.name = req.body.name;
//             elem.job = req.body.job;
//             elem.Tell=req.body.Tell;
//             elem.birthCity=req.body.birthCity;
//             elem.birthCountry=req.body.birthCountry;
//         }
//     })
// }
// // const userLogin=(req,res)=>{
// //     const loginUser = {
// //         name: req.body.name,
// //         email: req.body.email,
// //     }
// //     user.push(loginUser)
// //     res.status(201).send(loginUser)
// // }
// const registrUser = (req,res)=>{
//     const userId = req.query.id
//     users.forEach((elem,i)=>{
//         if(i == userId){
//             elem.name = req.body.name;
//             elem.job = req.body.job;
//             elem.Tell=req.body.Tell;
//             elem.birthCity=req.body.birthCity;
//             elem.birthCountry=req.body.birthCountry;
//         }
//     })
// }
//  function getPersonInfo(req, res) {
//     //  console.log('Inside Person Info Again')
//     //const id = req.params.id; // '1'
//     // console.log(req.body);
//     const result = users.find( ({ id }) => id === parseInt(req.body.id));
//       // console.log(result);
//     if(result)
//       res.send(result);
//     else
//       res.status(404).send("We couldn’t find an account matching the email and password you entered. Please check and try again.");
//   };
// module.exports = {getAllUser,getUser,updateUser,addNewUser,registrUser, getPersonInfo}
// white_check_mark
// eyes
// raised_hands











