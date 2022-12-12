const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "stockApi";

const signup = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  // Existing user check
  // Hashed password
  // User creation
  // Token generate
  // Send final res

  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ status: "failed", message: "Email already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await userModel.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);

    res.status(201).json({
      status: "success",
      user: result,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong");
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  // Existing user check
  // Compare password
  // Token generate
  // Send final res

  try {
    const existingUser = await userModel.findOne({ email: email });
    if (!existingUser) {
      return res
        .status(404)
        .json({ status: "failed", message: "Email not found" });
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res
        .status(400)
        .json({ status: "failed", message: "Invalid password" });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      SECRET_KEY
    );

    res.status(200).json({
      status: "success",
      user: existingUser,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong");
  }
};

const edit = async (req, res) => {
  const id = req.params.id;
  const { firstname, lastname, email } = req.body;

  try {
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({
        status: "failed",
        message: "User not found",
      });
    }

    // const hashedPassword = await bcrypt.hash(password, 10);

    const result = await userModel.findByIdAndUpdate(
      id,
      {
        firstname,
        lastname,
        email,
      },
      {
        new: true,
        useFindAndModify: false,
        runValidator: true,
      }
    );

    res.status(201).json({
      status: "success",
      user: result,
      message: "User updated...",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong");
  }
};

module.exports = { signup, signin, edit };
