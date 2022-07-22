const Character = require("../models/Character");

const createCharacterService = async (name, imageUrl, user) =>
  await Character.create({ name: name, imageUrl: imageUrl, user: user });

const readAllCharacterService = async () =>
  await Character.find().populate("user");

const readCharacterByIdService = async (id) => await Character.findById(id);

const readCharacterByNameService = async (name) =>
  await Character.find({ name: { $regex: `${name}`, $options: "i" } })
    .sort({ _id: -1 })
    .populate("user");

const updateCharacterService = async (id, updatedCharacter) =>
  await Character.findByIdAndUpdate(id, updatedCharacter).setOptions({
    new: true,
  });
const deleteCharacterService = async () => {};

module.exports = {
  createCharacterService,
  readAllCharacterService,
  readCharacterByIdService,
  readCharacterByNameService,
  updateCharacterService,
  deleteCharacterService,
};
