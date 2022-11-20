const express = require("express");
const cors = require("cors");
const path = require("path");

const planetRouter = require("./routes/planets.routes");

const app = express();
// protect server
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// accept json input
app.use(express.json());

// server frontend site
app.use(express.static(path.join(__dirname, "..", "public")));

// specify routes
app.use("/", (req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
  console.log(`${req.method} request to ${req.baseUrl}${req.url} completed`);
});
app.use("/planets", planetRouter);
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
