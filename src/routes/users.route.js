const router = require('express').Router();
const usersController = require('../controllers/users.controller');

router.get('/', usersController.realAllUsersController);
router.post('/create', usersController.createUserController);

module.exports = router;