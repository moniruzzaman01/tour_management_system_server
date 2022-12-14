const express = require("express");
const router = express.Router();
const TourController = require("../controllers/Tour.controller");

router
  .route("/")
  .get(TourController.getAllTours)
  .post(TourController.createTours);

router.route("/:id").get(TourController.getTourById);

module.exports = router;
