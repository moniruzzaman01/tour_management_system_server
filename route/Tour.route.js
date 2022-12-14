const express = require("express");
const router = express.Router();
const TourController = require("../controllers/Tour.controller");

router
  .route("/")
  .get(TourController.getAllTours)
  .post(TourController.createTours);

module.exports = router;
