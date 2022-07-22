const mongoose = require("mongoose");
const Character = require("../models/Character");

const idValidation = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid id" });
  }
  next();
};
const notFound = async (req, res, next) => {
  const idCharacter = req.params.id;
  const character = await Character.findById(idCharacter);
  if (!character) {
    return res.status(400).send({ message: "Character not found" });
  }
  next();
};

const bodyValidation = (req, res, next) => {
  const { name, imageUrl } = req.body;
  if (!name || !imageUrl) {
    return res.status(400).send({ message: "name and imageUrl are required" });
  }
  next();
};

module.exports = {
  idValidation,
  bodyValidation,
  notFound
};
