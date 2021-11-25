const {registeredTests} = require ('../dbRegisteredTests')

const getAllRegisteredTestses = (req,res) => {
    res.send(registeredTests)
};

module.exports = {getAllRegisteredTestses }
