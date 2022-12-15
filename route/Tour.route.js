const express = require("express");
const router = express.Router();
const TourController = require("../controllers/Tour.controller");

router
  .route("/")
  .get(TourController.getAllTours)
  .post(TourController.createTours);

router.route("/trending").get(TourController.getTrendingTours);

router.route("/cheapest").get(TourController.getCheapestTours);

router.route("/premium").get(TourController.getPremiumTours);

router.route("/:id").get(TourController.getTourById);

module.exports = router;
