const usersService = require('../services/users.service');

const createUserController = async (req, res) => {
    try {
        const user = req.body;
        const response = await usersService.createUserService(user).catch(error => console.log(error));

        if (!response) {
            return res.status(500).send({ message: 'Error creating user' });
        }
        return res.status(201).send({ data: response, message: 'User created successfully' });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
};

const realAllUsersController = async (req, res) => { }

module.exports = {
    createUserController,
    realAllUsersController
}
