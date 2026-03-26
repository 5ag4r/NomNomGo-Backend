const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: String,
  image: String,
  availability: {
    type: Boolean,
    default: true
  },
  description: String
}, { timestamps: true });

module.exports = mongoose.model("Food", foodSchema);