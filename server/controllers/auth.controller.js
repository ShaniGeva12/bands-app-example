const db = require("../models");
const Users = db.Users;

exports.findAll = (req, res) => {

  const userName = req.params.userName;
  const userPassword = req.params.userPassword;
  Users.findAll({ where: {
      UserName: userName,
      UserPassword: userPassword,
    } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bands."
      });
    });
};

