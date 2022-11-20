const { planets } = require("../models/planets.model");

function getAllPlanetsCtrl(req, res, next) {
  return res.status(201).json(planets);
}

module.exports = { getAllPlanetsCtrl };
