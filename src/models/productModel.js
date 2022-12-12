const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      require: true,
    },
    model: {
      type: String,
      require: true,
    },
    ram: {
      type: String,
      require: true,
    },
    rom: {
      type: String,
      require: true,
    },
    imei: {
      type: Number,
      require: true,
    },
    color: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
