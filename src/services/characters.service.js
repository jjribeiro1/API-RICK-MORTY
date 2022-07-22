const Character = require("../models/Character");

const createCharacterService = async (character) =>
  await Character.create(character);

const readAllCharacterService = async () => {};

const readCharacterByIdService = async () => {};

const readCharacterByNameService = async () => {};

const updateCharacterService = async () => {};

const deleteCharacterService = async () => {};

module.exports = {
  createCharacterService,
  readAllCharacterService,
  readCharacterByIdService,
  readCharacterByNameService,
  updateCharacterService,
  deleteCharacterService,
};
