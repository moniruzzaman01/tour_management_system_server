const express = require("express");
const cors = require("cors");
const app = express();
const TourRouter = require("./route/Tour.route");

app.use(cors());
app.use(express.json());

app.use("/api/v1/tours", TourRouter);

app.get("/", (req, res) => {
  res.send("Tour Management Server is Running!!!");
});

module.exports = app;
