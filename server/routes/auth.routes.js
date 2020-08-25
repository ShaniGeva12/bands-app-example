module.exports = app => {
  const auth = require("../controllers/auth.controller");

  let router = require("express").Router();


  router.get("/:userName/:userPassword", auth.findAll);

  app.use('/api/auth', router);
};
