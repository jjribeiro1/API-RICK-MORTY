const User = require('../models/User');

const bodyValidation = (req, res, next) => {
    const { name, username, email, password, photo } = req.body;
    if (!name || !username || !email || !password || !photo) {
        return res.status(400).send({ message: 'name, username, email, password, photo is required' });
    }
    next();
};

const isUsernameAvailable = async (req, res, next) => {
    const { username } = req.body;
    const foundUsername = await User.findOne({ username });

    if (foundUsername !== null) {
        return res.status(400).send({ message: 'username is not available' });
    }
    next();
}
const isEmailAvailable = async (req, res, next) => {
    const { email } = req.body;
    const foundEmail = await User.findOne({ email });

    if (foundEmail !== null) {
        return res.status(400).send({ message: 'email is not available' });
    }
    next();
}

module.exports = {
    bodyValidation,
    isUsernameAvailable,
    isEmailAvailable
};