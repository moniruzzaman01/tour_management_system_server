const {
  getTourService,
  createTourService,
  getTourByIdService,
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
