const jwt = require("jsonwebtoken")

const { JWT_SECRET, JWT_EXPIRY } = require("./index")

const Project = require("../models/Project")
const Task = require("../models/Task")

const authMiddleware = (req, res, next) => {
  let token = req.headers.authorization

  if (token) {
    token = token.split(" ").pop().trim()
  } else {
    return res.status(401).json({ message: "Missing or invalid token." })
  }

  try {
    const { data } = jwt.verify(token, JWT_SECRET, { maxAge: JWT_EXPIRY })
    req.user = data
  } catch (error) {
    console.error("Invalid token:", error)
    return res.status(401).json({ message: "Missing or invalid token." })
  }

  next()
}

const userOwnsProject = async (req, res, next) => {
  const authenticatedUserId = req.user._id
  const requestedProjectId = req.params.id || req.params.projectId

  if (!requestedProjectId) {
    return res.status(400).json({ message: "Missing project ID." })
  }

  const foundProject = await Project.findById(requestedProjectId)

  if (!foundProject) {
    return res.status(404).json({ message: "Project not found." })
  }

  if (String(foundProject.user) !== String(authenticatedUserId)) {
    return res.status(403).json({
      message: "You are not authorized to access or modify this project.",
    })
  }

  next()
}

const userOwnsTask = async (req, res, next) => {
  const authenticatedUserId = req.user._id
  const requestedTaskId = req.params.id || req.params.taskId

  if (!requestedTaskId) {
    return res.status(400).json({ message: "Missing task ID." })
  }

  const foundTask = await Task.findById(requestedTaskId)

  if (!foundTask) {
    return res.status(404).json({ message: "Couldn't find task." })
  }

  const foundProject = await Project.findById(foundTask.project)

  if (!foundProject) {
    return res.status(404).json({ message: "Couldn't find project." })
  }

  if (String(foundProject.user) !== String(authenticatedUserId)) {
    return res
      .status(403)
      .json({
        message: "You are not authorized to access or modify this task.",
      })
  }

  next()
}

module.exports = { authMiddleware, userOwnsProject, userOwnsTask }
