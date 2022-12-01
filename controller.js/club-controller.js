const { param } = require("../api-routes")
const ClubModel = require("../model/club-model")


exports.getEvents = (req, res) => {
    let clubId = req.params.clubId

    ClubModel.findOne({ "_id": clubId }).populate("event1").populate("event2").populate("event3").populate("event4").exec((err, success) => {
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
                msg: "Club ret...",
                data: {
                    "clubName": success.clubName,
                    "event1": success.event1.eventName,
                    "event2": success.event2.eventName,
                    "event3": success.event3.eventName,
                    "event4": success.event4.eventName,
                    "event1Id": success.event1._id,
                    "event2Id": success.event2._id,
                    "event3Id": success.event3._id, 
                    "event4Id": success.event4._id
                }
            })
        }
    })
}

exports.addClub = (req, res) => {
    let club = new ClubModel(req.body)

    club.save((err, success) => {
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
                msg: "Club save...",
                data: success
            })
        }
    })
}



exports.findAllClubs = (req, res) => {
    ClubModel.find().populate("event1").populate("event2").populate("event3").populate("event4").exec((err, success) => {
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
                msg: "Club ret...",
                data: success
            })
        }
    })
}