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

const userOwnsUser = (res, req, next) => {
  const authenticatedUserId = req.user._id
  const requestedUserId = req.params.id

  if (String(authenticatedUserId) !== String(requestedUserId)) {
    return res.sendStatus(403)
  }

  next()
}

const userOwnsProject = (res, req, next) => {
  const authenticatedUserId = req.user._id
  const requestedProjectId = req.params.id

  const foundProject = Project.findById(requestedProjectId)

  if (!foundProject) {
    return res.sendStatus(404)
  }

  if (String(foundProject.user) !== String(authenticatedUserId)) {
    return res.sendStatus(403)
  }

  next()
}

const userOwnsTask = (res, req, next) => {
  const authenticatedUserId = req.user._id
  const requestedTaskId = req.params.id

  const foundTask = Task.findById(requestedTaskId)

  if (!foundTask) {
    return res.sendStatus(404)
  }

  const foundProject = Project.findById(foundTask.project)

  if (!foundProject) {
    return res.sendStatus(404)
  }

  if (String(foundProject.user) !== String(authenticatedUserId)) {
    return res.sendStatus(403)
  }

  next()
}

module.exports = { authMiddleware, userOwnsUser, userOwnsProject, userOwnsTask }
