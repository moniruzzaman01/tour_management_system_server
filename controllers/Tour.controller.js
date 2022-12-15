const {
  getTourService,
  createTourService,
  getTourByIdService,
  getTrendingToursService,
  getCheapestToursService,
  getPremiumToursService,
  updateToursByIdService,
} = require("../services/Tour.services");

module.exports.getAllTours = async (req, res) => {
  try {
    const result = await getTourService();
    res.status(200).json({
      status: true,
      message: "Tour data found",
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
  try {
    const result = await createTourService(req.body);
    res.status(200).json({
      status: true,
      message: "Tour creation successfull",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Tour creation failed!",
      error: error.message,
    });
  }
};
module.exports.getTourById = async (req, res) => {
  try {
    const result = await getTourByIdService(req.params.id);
    res.status(200).json({
      status: true,
      message: "query by id successfull",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "query by id failed!",
      error: error.message,
    });
  }
};
module.exports.getTrendingTours = async (req, res) => {
  try {
    const result = await getTrendingToursService();
    res.status(200).json({
      status: true,
      message: "query by trending successfull",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "query by trending failed!",
      error: error.message,
    });
  }
};
module.exports.getCheapestTours = async (req, res) => {
  try {
    const result = await getCheapestToursService();
    res.status(200).json({
      status: true,
      message: "query by cheapest successfull",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "query by cheapest failed!",
      error: error.message,
    });
  }
};
module.exports.getPremiumTours = async (req, res) => {
  try {
    const result = await getPremiumToursService();
    res.status(200).json({
      status: true,
      message: "query by premium successfull",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "query by premium failed!",
      error: error.message,
    });
  }
};
module.exports.updateToursById = async (req, res) => {
  try {
    const result = await updateToursByIdService(req.params.id, req.body);
    res.status(200).json({
      status: true,
      message: "query for update tour successfull",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "query for update tour failed!",
      error: error.message,
    });
  }
};
