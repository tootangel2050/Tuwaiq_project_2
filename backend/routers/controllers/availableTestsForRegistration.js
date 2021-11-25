const {AvailableTestsForRegistration} = require("../dbAvailableTestsForRegistration");

const getAllAvailableTestsForRegistration = (req,res)=>{
    res.send(AvailableTestsForRegistration);
};

// const getAvailableTestForRegistration = (req,res)=>{
    
//     const foundAvailableTestForRegistration = AvailableTestsForRegistration.filter((elem, i) => {
//         return i == req.params.id 
//     })
//     if(foundAvailableTestForRegistration.length > 0){
//         res.send(foundAvailableTestForRegistration[0])
//         return
//         }
//         res.status(404).send("AvailableTestForRegistration not found")
// }
// const addNewAvailableTestForRegistration = (req,res)=>{
//     const addedAvailableTestForRegistration = {
//         Name: req.body.Name,
//         AppointmentStatus: req.body.AppointmentStatus,
//         TestLanguage: req.body.TestLanguage,
//         TestTypeMechanism:req.body.TestTypeMechanism,
//         TestDate:req.body.TestDate
//     }

//     AvailableTestsForRegistration.push(addedAvailableTestForRegistration)

//     res.status(201).send(addedAvailableTestForRegistration);
// }
// const updateAvailableTestForRegistration = (req,res)=>{
//     const availableTestsForRegistrationId = req.query.id
//     availableTestsForRegistration.forEach((elem,i)=>{
//         if(i == availableTestsForRegistrationId){
//             elem.Name = req.body.Name;
//             elem.AppointmentStatus = req.body.AppointmentStatus;
//             elem.TestLanguage = req.body.TestLanguage;
//             elem.TestTypeMechanism = req.body.TestTypeMechanism;
//             elem.TestDate = req.body.TestDate;
//             res.send(elem);
//         }
//     })
    
// }
module.exports = {getAllAvailableTestsForRegistration};