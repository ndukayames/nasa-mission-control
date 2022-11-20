const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const planetRouter = require("./routes/planets.routes");
const launchesRouter = require("./routes/launches.routes");

const app = express();
// protect server
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// logging
app.use(morgan("combined"));

// accept json input
app.use(express.json());

// server frontend site
app.use(express.static(path.join(__dirname, "..", "public")));

// specify routes
app.use("/planets", planetRouter);
app.use("/launches", launchesRouter);
app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
