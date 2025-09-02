const jwt = require("jsonwebtoken")

const { JWT_SECRET, JWT_EXPIRY } = require("./index")

const Project = require("../models/Project")
const Task = require("../models/Task")

const authMiddleware = (req, res, next) => {
  let token = req.headers.authorization

  if (token) {
    token = token.split(" ").pop().trim()
  } else {
    return res.sendStatus(401)
  }

  try {
    const { data } = jwt.verify(token, JWT_SECRET, { maxAge: JWT_EXPIRY })
    req.user = data
  } catch (error) {
    console.error("Invalid token:", error)
    return res.sendStatus(401)
  }

  next()
}

const userOwnsProject = async (req, res, next) => {
  const authenticatedUserId = req.user._id
  const requestedProjectId = req.params.id || req.params.projectId

  const foundProject = await Project.findById(requestedProjectId)

  if (!foundProject) {
    return res.sendStatus(404)
  }

  if (String(foundProject.user) !== String(authenticatedUserId)) {
    return res.sendStatus(403)
  }

  next()
}

const userOwnsTask = async (req, res, next) => {
  const authenticatedUserId = req.user._id
  const requestedTaskId = req.params.id || req.params.taskId

  const foundTask = await Task.findById(requestedTaskId)

  if (!foundTask) {
    return res.sendStatus(404)
  }

  const foundProject = await Project.findById(foundTask.project)

  if (!foundProject) {
    return res.sendStatus(404)
  }

  if (String(foundProject.user) !== String(authenticatedUserId)) {
    return res.sendStatus(403)
  }

  next()
}

module.exports = { authMiddleware, userOwnsProject, userOwnsTask }
