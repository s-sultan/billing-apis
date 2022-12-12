const productModel = require("../models/productModel");

const addProduct = async (req, res) => {
  const { brand, model, ram, rom, imei, color } = req.body;

  try {
    const product = await productModel.create({
      brand,
      model,
      ram,
      rom,
      imei,
      color,
    });

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong");
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await productModel.find();

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong");
  }
};

const editProduct = async (req, res) => {
  const id = req.params.id;
  const { brand, model, ram, rom, imei, color } = req.body;

  try {
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).json({
        status: "failed",
        message: "Product not found",
      });
    }

    const result = await productModel.findByIdAndUpdate(
      id,
      {
        brand,
        model,
        ram,
        rom,
        imei,
        color,
      },
      {
        new: true,
        useFindAndModify: false,
        runValidator: true,
      }
    );

    res.status(201).json({
      status: "success",
      product: result,
      message: "Product updated...",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong");
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).json({
        status: "failed",
        message: "Product not found",
      });
    }

    const result = await product.remove();

    res.status(201).json({
      status: "success",
      message: "Product deleted...",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong");
  }
};

module.exports = { addProduct, getProducts, editProduct, deleteProduct };
