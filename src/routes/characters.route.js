const router = require("express").Router();
const charactersController = require("../controllers/characters.controller");
const {
  idValidation,
  bodyValidation,
  notFound
} = require("../middlewares/characters.middleware");
const authMiddleware = require("../middlewares/auth.middleware");

router.post(
  "/create",
  authMiddleware,
  bodyValidation,
  charactersController.createCharacterController
);
router.get(
  "/",
  authMiddleware,
  charactersController.readAllCharacterController
);
router.get(
  "/find/:id",
  authMiddleware,
  idValidation,
  notFound,
  charactersController.readCharacterByIdController
);
router.get(
  "/search",
  authMiddleware,
  charactersController.readCharacterByNameController
);
router.put(
  "/update/:id",
  authMiddleware,
  idValidation,
  notFound,
  bodyValidation,
  charactersController.updateCharacterController
);
router.delete(
  "/delete/:id",
  authMiddleware,
  idValidation,
  notFound,
  charactersController.deleteCharacterController
);

module.exports = router;
