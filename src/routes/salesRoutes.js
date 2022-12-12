const express = require("express");
const {
  addSalesProduct,
  getSalesProducts,
} = require("../controllers/salesController");

const salesRouter = express.Router();

salesRouter.post("/addSalesProduct", addSalesProduct);

salesRouter.get("/allSalesProducts", getSalesProducts);

module.exports = salesRouter;
