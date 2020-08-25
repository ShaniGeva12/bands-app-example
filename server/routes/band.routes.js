module.exports = app => {
  const bands = require("../controllers/band.controller");

  let router = require("express").Router();

  router.post("/", bands.create);

  router.get("/", bands.findAll);

  router.get("/:id", bands.findOne);

  router.put("/:id", bands.update);

  router.delete("/:id", bands.delete);

  app.use('/api/bands', router);
};
