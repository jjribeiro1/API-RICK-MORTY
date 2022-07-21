const router = require("express").Router();
const characterController = require("../controllers/characters.controller");

router.post("/create", characterController.createCharacterController);
router.get("/", characterController.readAllCharacterController);
router.get("/find/:id", characterController.readCharacterByIdController);
router.get("/search", characterController.readByNameController);
router.put("/update/:id", characterController.updateCharacterController);
router.delete("/delete/:id", characterController.deleteCharacterController);

module.exports = router;
