const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: String,
    firstName: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('User', UserSchema);
