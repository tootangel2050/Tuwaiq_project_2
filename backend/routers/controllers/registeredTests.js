const {registeredTests} = require ('../dbRegisteredTests')

const getAllRegisteredTestses = (req,res) => {
    res.send(registeredTests)
};
const getregisteredTests = (req, res)=>{
    console.log(req.params.id);
    const foundregisteredTests = registeredTests.filter(({nationalID})=>{
      return nationalID == req.params.id
    })
    console.log(foundregisteredTests);
    if(foundregisteredTests.length>0){
      res.send(foundregisteredTests)
      return
    }
    res.status(404).send("registeredTest not found")
  }


module.exports = {getAllRegisteredTestses , getregisteredTests }
