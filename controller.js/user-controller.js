const UserModel = require("../model/user-data-model")

exports.addFile = (req, res) => {
    let file = new UserModel(req.body)
    file.save((err, success) => {
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