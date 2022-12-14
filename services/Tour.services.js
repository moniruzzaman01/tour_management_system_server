const Tours = require("../models/Tour.model");

module.exports.getTourService = async () => {
  const result = await Tours.find({});
  return result;
};
module.exports.createTourService = async (data) => {
  const tour = new Tours(data);
  const result = await tour.save();
  //   console.log(tour);
  return result;
};
module.exports.getTourByIdService = async (data) => {
  await Tours.updateOne({ _id: data }, { $inc: { views: 1 } });
  const result = await Tours.find({ _id: data });
  return result;
};
