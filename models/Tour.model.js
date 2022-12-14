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
});

//Models
const Tours = mongoose.model("Tours", tourSchema);

module.exports = Tours;
