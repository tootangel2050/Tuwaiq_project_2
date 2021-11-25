const {resulted} = require ('../resulteDb')

const getAllResulteds = (req,res) => {
    res.send(resulted)
};

// const getResulted = (req,res) => {
//     const foundResulted = resulteds.filter((elem, i ) => {
//         return i == req.params.id
//     })
//     if (foundResulted.length > 0){
//         res.send(foundResulted[0])
//         return
//     }
//     res.status(404).send("results not found")
// }
// const addNewResulted = (req ,res) =>{
//     const addedResulted = {
//         TestDate:req.body.TestDate,
//         TestScore:req.body.TestScore,
//     }
//     resulteds.push(addedResulted)
//     res.status(201).send(addedResulted);

// }

// const updateResulted = (req,res) => {
//     const resultedsId = req.query.id
//     resulted.forEach((elem,i) =>{
//         if (i == resultedsId){
//             elem.TestDate = req.body.TestDate;
//             elem.TestScore = req.body.TestScore;
//             res.send(elem);
//         }
//     })
// }

module.exports = {getAllResulteds }
