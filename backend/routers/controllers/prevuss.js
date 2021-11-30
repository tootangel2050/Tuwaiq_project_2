const { prevus } = require("../prevusDb");

const getAllPrevuss = (req, res) => {
  res.send(prevus);
};

const getprevus = (req, res)=>{
  console.log(req.params.id);
  const foundprevus = prevus.filter(({nationalID})=>{
    return nationalID == req.params.id
  })
  console.log(foundprevus);
  if(foundprevus.length>0){
    res.send(foundprevus)
    return
  }
  res.status(404).send("prevuss not found")
}

module.exports = { getAllPrevuss ,getprevus };
