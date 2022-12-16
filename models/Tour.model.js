const mongoose = require("mongoose");

//Schemas
const tourSchema = mongoose.Schema({
  place: {
    type: String,
    required: [true, "Please provide a valid tour name."],
    unique: [true, "Tour name must be unique."],
    minlength: [5, "Use more than 4 character"],
  },
  description: {
    type: String,
    required: true,
    minlength: [20, "Please provide a good description"],
  },
  image: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: [true, "Duration must be provided"],
  },
  ratings: {
    type: Number,
    required: true,
    min: [0, "Ratings can't be negative"],
    max: [5, "Ratings can't be more than 5"],
  },
  price: {
    type: Number,
    required: [true, "Please an amount for this tour package"],
  },
  category: {
    type: String,
    enum: {
      values: ["mountain", "beach", "nature"],
      message:
        "Catrgory name can't accept {VALUE}. Please provive mountain or beach or nature",
    },
  },
  views: {
    type: Number,
    required: true,
  },
});

//Models
const Tours = mongoose.model("Tours", tourSchema);

module.exports = Tours;
