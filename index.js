const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const router = require("./api-routes")


let app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//urls
app.use("/api", router)

//db connection
mongoose.connect('mongodb://localhost:27017/StudentEventData', () => {
    console.log("Db connected!!")
})

let port = 9899
app.listen(port, () => {
    console.log("Server Runnning..")
})