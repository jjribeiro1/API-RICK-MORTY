const router = require("express").Router();
const usersController = require("../controllers/users.controller");
const {
  bodyValidation,
  isUsernameAvailable,
  isEmailAvailable,
} = require("../middlewares/users.middleware");

router.get("/", usersController.readAllUsersController);
router.post(
  "/create",
  bodyValidation,
  isUsernameAvailable,
  isEmailAvailable,
  usersController.createUserController
);

module.exports = router;
