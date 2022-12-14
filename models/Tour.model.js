const mongoose = require("mongoose");

//Schemas
const tourSchema = mongoose.Schema({
  place: {
    type: String,
    required: [true, "Please provide a valid tour name."],
    min: [5, "Tour name is too short."],
    max: [100, "Tour name is too long."],
    unique: [true, "Tour name must be unique."],
  },
  description: {
    type: String,
    required: true,
    min: [20, "Please provide description in details"],
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
