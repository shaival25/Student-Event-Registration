const EventModel = require("../model/event-model")

exports.addEvent = (req, res) => {
    let event = new EventModel(req.body)

    event.save((err, success) => {
        if (err) {
            console.log(err);
            res.json({
                status: -1,
                msg: "SMW",
                data: "Please Try After Sometime"
            })
        } else {
            res.json({
                status: 200,
                msg: "Event save...",
                data: success
            })
        }
    })
}

exports.findAllEvents = (req, res) => {
    EventModel.find().populate("club").exec((err, success) => {
        if (err) {
            console.log(err);
            res.json({
                status: -1,
                msg: "SMW",
                data: "Please Try After Sometime"
            })
        } else {
            res.json({
                status: 200,
                msg: "Event Ret...",
                data: success
            })
        }
    })
}