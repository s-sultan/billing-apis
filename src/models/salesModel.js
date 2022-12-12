const mongoose = require("mongoose");

const SalesSchema = mongoose.Schema(
  {
    customerName: {
      type: String,
      require: true,
    },
    customerAddress: {
      type: String,
      require: true,
    },
    customerMobile: {
      type: Number,
      require: true,
    },
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
    price: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sales", SalesSchema);
