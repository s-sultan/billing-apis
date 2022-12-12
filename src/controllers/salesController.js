const salesModel = require("../models/salesModel");

const addSalesProduct = async (req, res) => {
  const {
    customerName,
    customerAddress,
    customerMobile,
    brand,
    model,
    ram,
    rom,
    imei,
    color,
    price,
  } = req.body;

  try {
    const salesProduct = await salesModel.create({
      customerName,
      customerAddress,
      customerMobile,
      brand,
      model,
      ram,
      rom,
      imei,
      color,
      price,
    });

    res.status(201).json({
      success: true,
      message: "Sales product added successfully",
      salesProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong");
  }
};

const getSalesProducts = async (req, res) => {
  try {
    const salesProducts = await salesModel.find();

    res.status(200).json({
      success: true,
      salesProducts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong");
  }
};

module.exports = { addSalesProduct, getSalesProducts };
