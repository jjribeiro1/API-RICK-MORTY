const User = require("../models/User");

const createUserService = async (user) => await User.create(user);

const readAllUsersService = async () => await User.find();

module.exports = {
  createUserService,
  readAllUsersService,
};
