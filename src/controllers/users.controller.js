const usersService = require("../services/users.service");

const createUserController = async (req, res) => {
  try {
    const user = req.body;
    const response = await usersService
      .createUserService(user)
      .catch((error) => console.log(error));

    if (!response) {
      return res.status(500).send({ message: "Error creating user" });
    }

    return res
      .status(201)
      .send({ data: response, message: "User created successfully" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const readAllUsersController = async (req, res) => {
  try {
    const response = await usersService.readAllUsersService();
    if (response.length === 0) {
      return res.status(404).send({ message: "No user has been registered" });
    }
    return res.status(200).send({ data: response });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  createUserController,
  readAllUsersController,
};
