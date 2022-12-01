var router = require("express").Router()
const studentController = require("./controller.js/student-controller")
    // const eventController = require("./controller.js/event-controller")
    // const clubController = require("./controller.js/club-controller")
    // const userController = require("./controller.js/user-controller")

router.post("/register", studentController.saveStudent)
router.get("/students", studentController.getAllStudents)
    // router.post("/event", eventController.addEvent)
    // router.get("/events", eventController.findAllEvents)
    // router.post("/club", clubController.addClub)
    // router.get("/clubs", clubController.findAllClubs)
    // router.get("/events/:clubId", clubController.getEvents)
router.get("/email/:emailId", studentController.checkEmail)
router.get("/student/:id", studentController.getStudentById)
router.get("/deleteUser/:id", studentController.deleteStudents)
    // router.post("/file", userController.addFile)

module.exports = router