const express = require("express")
const router = express.Router()

const userRoutes = require("./api/userRoutes")
const projectRoutes = require("./api/projectRoutes")
const taskRoutes = require("./api/taskRoutes")

router.use("/users", userRoutes)
router.use("/projects", projectRoutes)
router.use("/tasks", taskRoutes)

module.exports = router
