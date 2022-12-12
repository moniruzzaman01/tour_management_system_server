const express = require("express");
const router = express.Router();
const TourController = require("../controllers/Tour.controller");

router.route("/").get(TourController.getAllTours);

module.exports = router;
