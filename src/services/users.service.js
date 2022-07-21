const User = require("../models/User");

const createUserService = async (user) => await User.create(user);

const readAllUsersService = async () => await User.find();

const findUserByIdService = async (id) => await User.findById(id)

module.exports = {
  createUserService,
  readAllUsersService,
  findUserByIdService
};
