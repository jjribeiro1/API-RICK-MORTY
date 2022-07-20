const User = require("../models/User");

const createUserService = async (user) => await User.create(user);

module.exports = {
    createUserService,
};
