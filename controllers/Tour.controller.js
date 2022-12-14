const { CommandFailedEvent } = require("mongodb");
const Tour = require("../models/Tour.model");
const { getTourService } = require("../services/Tour.services");

module.exports.getAllTours = async (req, res) => {
  try {
    const result = await getTourService();
    res.status(400).json({
      status: true,
      message: "query successfull",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "query failed!",
    });
  }
};
module.exports.createTours = async (req, res) => {
  const tour = new Tour(req.body);
  const result = await tour.save();
  console.log(tour);
  res.send(result);
};
