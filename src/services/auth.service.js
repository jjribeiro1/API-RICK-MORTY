const User = require("../models/User");

const findUserByEmail = async (email) =>
  await User.findOne({ email }).select("+password");

module.exports = {
  findUserByEmail,
};
