require("dotenv").config();
const jwt = require("jsonwebtoken");
const { findUserByIdService } = require("../services/users.service");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: "No token provided" });
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    return res.status(401).send({ message: "Badly formatted token" });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ message: "Token invalid" });
  }

  jwt.verify(token, process.env.SECRET, async function (err, decoded) {
    if (err) {
      return res.status(401).send({ message: err.message });
    }
    const user = await findUserByIdService(decoded);
    if (!user) {
      return res.status(401).send({ message: "Token invalid" });
    }
    req.userId = decoded._id;
    return next();
  });
};
