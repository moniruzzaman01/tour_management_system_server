const mongoose = require("mongoose");

//Schemas
const tourSchema = mongoose.Schema({
  place: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
});

//Models
const Tours = mongoose.model("Tours", tourSchema);

module.exports = Tours;
