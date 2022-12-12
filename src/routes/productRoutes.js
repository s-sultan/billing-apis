const express = require("express");
const {
  addProduct,
  getProducts,
  editProduct,
  deleteProduct,
} = require("../controllers/productController");

const productRouter = express.Router();

productRouter.post("/addProduct", addProduct);

productRouter.get("/allProducts", getProducts);

productRouter.put("/editProduct/:id", editProduct);

productRouter.delete("/deleteProduct/:id", deleteProduct);

module.exports = productRouter;
