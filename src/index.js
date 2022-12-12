const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());
app.use(cors());

const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const salesRouter = require("./routes/salesRoutes");

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/sales", salesRouter);

app.get("/", (req, res) => {
  res.send("Billing API Test");
});

const PORT = process.env.PORT || 4000;

mongoose
  .connect(
    "mongodb+srv://admin:admin165@cluster0.mqluep0.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server worked on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
