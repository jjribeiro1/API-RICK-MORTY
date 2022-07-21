const router = require("express").Router();
const usersController = require("../controllers/users.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const {
  bodyValidation,
  isUsernameAvailable,
  isEmailAvailable,
} = require("../middlewares/users.middleware");

router.get("/", authMiddleware, usersController.readAllUsersController);
router.post(
  "/create",
  bodyValidation,
  isUsernameAvailable,
  isEmailAvailable,
  usersController.createUserController
);

module.exports = router;
