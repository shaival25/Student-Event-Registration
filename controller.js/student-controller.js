const studentModel = require('../model/student-model')
const couterModel = require('../model/counter-model')

exports.saveStudent = (req, res) => {
    console.log("hidlknfkkaenkbkjsjbfjlsdbjhasvdhjav")
    let student = new studentModel(req.body)
    console.log(req.body)
    let id
    couterModel.findOneAndUpdate({ type: "StudentSeq" }, { $inc: { "seq": 1 } }, { new: true },
        (err, success) => {
            if (err) {
                console.log(err);
                res.json({
                    status: -1,
                    msg: "SMW",
                    data: "Please Try After Sometime"
                })
            } else {
                id = success.seq
                student.id = id
                console.log(student)
                student.save((err, success) => {
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
                            msg: "Event registered!!",
                            data: success
                        })
                    }
                })
            }
        })
}

exports.deleteStudents = (req, res) => {
    let id = req.params.id
    studentModel.deleteOne({ "id": id }).exec((err, success) => {
        if (err) {
            res.json({
                status: 0
            })
        } else {
            res.json({
                status: 1,

            })
        }
    })
}

exports.getAllStudents = (req, res) => {
    studentModel.find().populate('club').populate('event1').populate('event2').exec((err, success) => {
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
                msg: "Student Ret...",
                data: success
            })
        }
    })
}

exports.checkEmail = (req, res) => {
    let email = req.params.emailId
    studentModel.find({ "email": email }).exec((err, success) => {
        if (err) {
            res.json({
                status: 0
            })
        } else {
            res.json({
                status: 1
            })
        }
    })
}

exports.getStudentById = (req, res) => {
    let id = req.params.id
    studentModel.find({ "id": id }).exec((err, success) => {
        if (err) {
            res.json({
                status: 0
            })
        } else {
            res.json({
                status: 1,
                data: success
            })
        }
    })
}