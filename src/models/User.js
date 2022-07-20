const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    photo: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', UserSchema, 'users');

module.exports = User;