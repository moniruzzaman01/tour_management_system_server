const mongoose = require("mongoose");

//Schemas
const tourSchema = mongoose.Schema({
  place: {
    type: String,
    required: true,
  },
});

//Models
const Tours = mongoose.model("Tours", tourSchema);

module.exports = Tours;
