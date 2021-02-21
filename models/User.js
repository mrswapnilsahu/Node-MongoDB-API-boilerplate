const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    phone: {
        type: String
    },
    dob: {
        type: String
    }
});

module.exports = mongoose.model('User', PostSchema);