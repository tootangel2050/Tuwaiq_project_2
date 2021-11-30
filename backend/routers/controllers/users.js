const { users } = require("../dbUser");

const getAllUsers = (req, res) => {
  res.send(users);
};

const addNewUser = (req, res) => {
  const addedUser = {
    nationalID: req.body.nationalID,
    password: req.body.password,
  };

  users.push(addedUser);

  res.status(201).send(addedUser);
};

const updateUser = (req, res) => {
  const usersId = req.query.id;
  users.forEach((elem, i) => {
    if (i == usersId) {
      elem.name = req.body.name;
      elem.nationalID = req.body.nationalID;
      elem.password = req.body.password;
      elem.isAdmin = req.body.isAdmin;
    }
  });
};
const registrUser = (req, res) => {
  const nationalId = req.query.nationalID;
  users.forEach((elem, i) => {
    if (i == NationalId) {
      elem.nationalID = req.body.nationalID;
      elem.password = req.body.password;
      elem.dateOfBirth = req.body.dateOfBirth;
    }
  });
};
function getUser(req, res) {
  const { nationalID, password } = req.body;
  const foundUser = users.find((elem) => {
    return elem.nationalID == nationalID && elem.password == password;
  });
  if (foundUser) res.send(foundUser);
  else res.status(404).send("error");
}

module.exports = { getAllUsers, getUser, addNewUser, updateUser, registrUser };
