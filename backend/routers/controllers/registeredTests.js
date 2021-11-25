const {registeredTests} = require ('../dbRegisteredTests')

const getAllRegisteredTestses = (req,res) => {
    res.send(registeredTests)
};

// const getRegisteredTests = (req,res) => {

//     const foundRegisteredTests = registeredTestses.filter((elem, i ) => {
//         return i == req.params.id
//     })
//     if (foundRegisteredTests.length > 0){
//         res.send(foundRegisteredTests[0])
//         return
//     }
//     res.status(404).send("registeredTests not found")
// }
// const addNewRegisteredTests = (req ,res) =>{
//     const addedRegisteredTests = {
//         Name:req.body.Name,
//         AppointmentStatus:req.body.AppointmentStatus,
//         TestLanguage:req.body.TestLanguage,
//         TestTypeMechanism:req.body.TestTypeMechanism,
//         TestDate:req.body.TestDate,

//     }
//     resulted.push(addedRegisteredTests)
//     res.status(201).send(addedRegisteredTests);

// }

// const updateRegisteredTests = (req,res) => {
//     const registeredTestsesId = req.query.id
//     registeredTests.forEach((elem,i) =>{
//         if (i == registeredTestsesId){
//             elem.Name = req.body.Name;
//             elem.AppointmentStatus = req.body.AppointmentStatus;
//             elem.TestLanguage = req.body.TestLanguage;
//             elem.TestTypeMechanism = req.body.TestTypeMechanism;
//             elem.TestDate = req.body.TestDate;
//             res.send(elem);
//         }
//     })
// }

module.exports = {getAllRegisteredTestses }
