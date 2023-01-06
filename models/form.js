const mongoose = require('mongoose');
const p = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    interest: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    Timestart: {
        type: Number,
        required: true
    },
    Timefinish: {
        type: Number,
        required: true
    },
    likes1: {
        type: String
    },
    likes2: {
        type: String
    },
    likes3: {
        type: String
    }
});

module.exports = mongoose.model("form", p);