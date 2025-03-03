const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

const Pet = mongoose.model("Pet", petSchema);
module.exports = Pet;