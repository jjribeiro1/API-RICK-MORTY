const router = require("express").Router();
const charactersController = require("../controllers/characters.controller");

router.post("/create", charactersController.createCharacterController);
router.get("/", charactersController.readAllCharacterController);
router.get("/find/:id", charactersController.readCharacterByIdController);
router.get("/search", charactersController.readByNameController);
router.put("/update/:id", charactersController.updateCharacterController);
router.delete("/delete/:id", charactersController.deleteCharacterController);

module.exports = router;
