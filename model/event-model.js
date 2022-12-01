const mongoose = require("mongoose")

const EventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model("events", EventSchema)