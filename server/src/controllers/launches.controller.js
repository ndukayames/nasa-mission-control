const launches = require("../models/launches.model");

function getAllLaunches(req, res) {
  res.status(200).json(launches.getAllLaunches());
}

function addNewLaunch(req, res) {
  const request = launches.addNewLaunch(req.body);
  if (request.err) {
    return res.status(400).json(request);
  }
  res.status(201).json(request);
}

function deleteLaunch(req, res) {
  const request = launches.deleteLaunch(req.params.id);
  if (request.err) {
    return res.status(404).json(request);
  }
  res.status(201).json(request);
}
module.exports = { getAllLaunches, addNewLaunch, deleteLaunch };
