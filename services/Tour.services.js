const Tours = require("../models/Tour.model");

module.exports.getTourService = async () => {
  const result = await Tours.find({});
  return result;
};
