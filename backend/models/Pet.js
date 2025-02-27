const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  stock: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Product", petSchema);