const mongoose = require("mongoose");

const idValidation = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid id" });
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
};
