const mongoose = require('mongoose');

// Define the user schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    }
});

// Create the user model
const UserModel = mongoose.model('users', UserSchema);

// Export the user model
module.exports = UserModel;
