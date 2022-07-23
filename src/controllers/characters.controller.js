const charactersService = require("../services/characters.service");

const createCharacterController = async (req, res) => {
  try {
    const { name, imageUrl } = req.body;
    const user = req.userId;
    const character = await charactersService.createCharacterService(
      name,
      imageUrl,
      user
    );
    const response = {
      id: character._id,
      user: character.user,
      name: character.name,
      imageUrl: character.imageUrl,
    };
    res
      .status(201)
      .send({ character: response, message: "Character created successfully" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const readAllCharacterController = async (req, res) => {
  try {
    let { limit, offset } = req.query;
    limit = Number(limit);
    offset = Number(offset);

    if (!offset) {
      offset = 0;
    }
    if (!limit) {
      limit = 8;
    }

    const total = await charactersService.countCharacters();
    const currentUrl = req.baseUrl;
    const next = offset + limit;
    const nextUrl =
      next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

    const previous = offset - limit < 0 ? null : offset - limit;
    const previousUrl =
      previous != null
        ? `${currentUrl}?limit=${limit}&offset=${previous}`
        : null;

    const characters = await charactersService.readAllCharacterService(
      limit,
      offset
    );

    if (characters.length === 0) {
      return res.status(404).send({ message: "No characters found" });
    }
    const response = characters.map((character) => {
      return {
        id: character._id,
        user: character.user,
        name: character.name,
        imageUrl: character.imageUrl,
      };
    });
    return res
      .status(200)
      .send({ limit, offset, total, previousUrl, nextUrl, results: response });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const readCharacterByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const character = await charactersService.readCharacterByIdService(id);
    const response = {
      id: character._id,
      user: character.user,
      name: character.name,
      imageUrl: character.imageUrl,
    };
    return res.status(200).send(response);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const readCharacterByNameController = async (req, res) => {
  try {
    const { name } = req.query;
    const characters = await charactersService.readCharacterByNameService(name);
    if (characters.length === 0) {
      return res.status(404).send({ message: "No characters found." });
    }
    const response = characters.map((character) => {
      return {
        id: character._id,
        user: character.user,
        name: character.name,
        imageUrl: character.imageUrl,
      };
    });
    return res.status(200).send({ characters: response });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const updateCharacterController = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedCharacter = req.body;
    const response = await charactersService.updateCharacterService(
      id,
      updatedCharacter
    );
    return res.status(200).send(response);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const deleteCharacterController = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await charactersService.deleteCharacterService(id);
    return res
      .status(200)
      .send({ data: response, message: "Character deleted successfully." });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  createCharacterController,
  readAllCharacterController,
  readCharacterByIdController,
  readCharacterByNameController,
  updateCharacterController,
  deleteCharacterController,
};
