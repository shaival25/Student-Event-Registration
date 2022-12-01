const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    firstName: {
        type: String,
        require: true,
        max: 15
    },
    lastName: {
        type: String,
        require: true,
        max: 15
    },
    email: {
        type: String,
        require: true,
        max: 30
    },
    phoneNumber: {
        type: String,
        require: true,
        max: 10
    },
    password: {
        type: String,
        require: true,
        max: 15
    },
    club: {
        type: String,

        require: true
    },
    event1: {
        type: String,
        require: true
    },
    event2: {
        type: String,

    }
})

module.exports = mongoose.model("students", StudentSchema)