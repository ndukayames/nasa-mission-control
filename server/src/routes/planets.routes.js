const express = require("express");
const { getAllPlanetsCtrl } = require("../controllers/planets.controllers");

const router = express.Router();

router.get("/", getAllPlanetsCtrl);

module.exports = router;
