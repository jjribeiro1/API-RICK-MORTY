const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Character = new mongoose.model("Character", CharacterSchema, "characters");

module.exports = Character;
