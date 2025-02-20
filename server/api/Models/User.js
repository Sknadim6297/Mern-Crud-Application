const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String
    },
    company: {
     type:String
    },
    role: {
        type: String,
        enum:["user","admin"],
        default: "user",

    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;