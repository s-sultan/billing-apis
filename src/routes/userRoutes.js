const express = require("express");
const {
  signup,
  signin,
  edit,
} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/signup", signup);

userRouter.post("/signin", signin);

userRouter.put("/edit/:id", edit);

module.exports = userRouter;
