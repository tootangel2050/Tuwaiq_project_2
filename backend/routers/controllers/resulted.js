const { resulted } = require("../resulteDb");

const getAllResulteds = (req, res) => {
  res.send(resulted);
};

const getresulted = (req, res)=>{
  console.log(req.params.id);
  const foundresulted = resulted.filter(({nationalID})=>{
    return nationalID == req.params.id
  })
  console.log(foundresulted);
  if(foundresulted.length>0){
    res.send(foundresulted)
    return
  }
  res.status(404).send("resulteds not found")
}

module.exports = { getAllResulteds , getresulted };
