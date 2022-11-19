const express = require("express");
const cors = require("cors");

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

// specify routes
app.use("/", (req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
  console.log(`${req.method} request to ${req.baseUrl}${req.url} completed`);
});
app.use("/planets", planetRouter);

module.exports = app;
