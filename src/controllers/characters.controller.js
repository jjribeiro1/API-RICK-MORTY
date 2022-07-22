const charactersService = require("../services/characters.service");

const createCharacterController = async (req, res) => {
  try {
    const { name, imageUrl } = req.body;
    const user = req.userId;
    const character = {
      user: user,
      name: name,
      imageUrl: imageUrl,
    };
    const response = await charactersService.createCharacterService(character);
    res
      .status(201)
      .send({ character: response, message: "Character created successfully" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const readAllCharacterController = async (req, res) => {};

const readCharacterByIdController = async (req, res) => {};

const readCharacterByNameController = async (req, res) => {};

const updateCharacterController = async (req, res) => {};

const deleteCharacterController = async (req, res) => {};

module.exports = {
  createCharacterController,
  readAllCharacterController,
  readCharacterByIdController,
  readCharacterByNameController,
  updateCharacterController,
  deleteCharacterController,
};
