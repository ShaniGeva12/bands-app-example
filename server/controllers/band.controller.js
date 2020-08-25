const db = require("../models");
const Bands = db.Bands;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.BandName) {
    res.status(400).send({
      message: "Band name can not be empty!"
    });
    return;
  }

  const band = {
    BandName: req.body.BandName,
    BandOrigin: req.body.BandOrigin,
    BandYears: req.body.BandYears,
    BandDisbandingYear: req.body.BandDisbandingYear,
    BandWebsite: req.body.BandWebsite
  };

  Bands.create(band)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Band."
      });
    });
};

exports.findAll = (req, res) => {

  Bands.findAll({ where: null })
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

exports.findOne = (req, res) => {
  const id = req.params.id;

  Bands.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Band with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Bands.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Band was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Band with id=${id}. Maybe Band was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Band with id=" + id
      });
    });
};

// Delete a Band with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Bands.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: "Deleted successfully"
        });
      } else {
        res.status(500).send({
          message: "Could not delete Band with id=" + id
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Band with id=" + id
      });
    });
};
