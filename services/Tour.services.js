const Tours = require("../models/Tour.model");

module.exports.getTourService = async () => {
  const result = await Tours.find({});
  return result;
};
module.exports.createTourService = async (data) => {
  data["views"] = 0;
  const tour = new Tours(data);
  const result = await tour.save();
  return result;
};
module.exports.getTourByIdService = async (data) => {
  await Tours.updateOne({ _id: data }, { $inc: { views: 1 } });
  const result = await Tours.find({ _id: data });
  return result;
};
module.exports.getTrendingToursService = async () => {
  const result = await Tours.find({}).sort({ views: -1 }).limit(3);
  return result;
};
module.exports.getCheapestToursService = async () => {
  const result = await Tours.find({}).sort({ price: 1 }).limit(3);
  return result;
};
module.exports.getPremiumToursService = async () => {
  const result = await Tours.find({}).sort({ price: -1 }).limit(3);
  return result;
};
module.exports.updateToursByIdService = async (id, updateData) => {
  const result = await Tours.updateOne({ _id: id }, updateData, {
    runValidators: true,
  });
  return result;
};
