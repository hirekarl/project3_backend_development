const express = require("express")
const router = express.Router()

const userRoutes = require("./api/userRoutes")
const projectRoutes = require("./api/projectRoutes")
const taskRoutes = require("./api/taskRoutes")

router.use("/user", userRoutes)
router.use("/project", projectRoutes)
router.use("/task", taskRoutes)

module.exports = router
