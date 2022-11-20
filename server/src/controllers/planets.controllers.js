const Planets = require("../models/planets.model");

function getAllPlanetsCtrl(req, res, next) {
  return res.status(201).json(Planets.getAllPlanets());
}

module.exports = { getAllPlanetsCtrl };
