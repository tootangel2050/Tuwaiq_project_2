const {prevus} = require("../prevusDb");

const getAllPrevuss = (req,res)=>{
    res.send(prevus);
};

// const getPrevus = (req,res)=>{
    
//     const foundPrevus = prevuss.filter((elem, i) => {
//         return i == req.params.id 
//     })
//     if(foundPrevus.length > 0){
//         res.send(foundPrevus[0])
//         return
//         }
//         res.status(404).send("Prevus not found")
// }
// const addNewPrevus = (req,res)=>{
//     const addedPrevus = {
//         Name: req.body.Name,
//         CenterOffice: req.body.CenterOffice,
//         TestMechanisim: req.body.TestMechanisim,
//         AttendanceStatus:req.body.AttendanceStatus,
//         AppointmentStatus:req.body.AppointmentStatus,
//         TestDate:req.body.TestDate,
//         PaymentMethod:req.body.PaymentMethod,
//     }

//     prevuss.push(addedPrevus)

//     res.status(201).send(addedPrevus);
// }
// const updatePrevus = (req,res)=>{
//     const prevussId = req.query.id
//     prevus.forEach((elem,i)=>{
//         if(i == prevussId){
//             elem.Name = req.body.Name;
//          elem.CenterOffice =req.body.CenterOffice;
//             elem.TestMechanisim= req.body.TestMechanisim;
//             elem.AttendanceStatus=req.body.AttendanceStatus;
//             elem.AppointmentStatus=req.body.AppointmentStatus;
//             elem.TestDate=req.body.TestDate;
//             elem.PaymentMethod=req.body.PaymentMethod;
//             res.send(elem);
//         }
//     })
// }
module.exports = {getAllPrevuss}