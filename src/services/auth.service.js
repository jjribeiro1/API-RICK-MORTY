require("dotenv").config();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const findUserByEmail = async (email) =>
  await User.findOne({ email }).select("+password");

const generateToken = async (userId) =>
  jwt.sign({ _id: userId }, process.env.SECRET, { expiresIn: 86000 });

module.exports = {
  findUserByEmail,
  generateToken,
};
