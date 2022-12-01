const mongoose = require('mongoose')

const ClubSchema = new mongoose.Schema({
    clubName: {
        type: String,
        require: true
    },
    event1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "events",
        require: true
    },
    event2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "events",
        require: true

    },
    event3: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "events",
        require: true

    },
    event4: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "events",
        require: true

    }
})

module.exports = mongoose.model("clubs", ClubSchema)