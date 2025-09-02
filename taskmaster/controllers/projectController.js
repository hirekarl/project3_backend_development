const Project = require("../models/Project")

// GET /
const getAllProjects = async (req, res) => {
  try {
    const authenticatedUserId = req.user._id

    const projects = Project.find({ user: authenticatedUserId })

    if (projects.length < 1) {
      return res.sendStatus(404)
    }

    res.status(200).json(projects)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

// POST /
const createProject = async (req, res) => {
  try {
    const authenticatedUserId = req.user._id

    const newProject = await Project.create({
      ...req.body,
      user: authenticatedUserId,
    })

    res.status(201).json(newProject)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

// GET /:id
const getProjectById = async (req, res) => {
  try {
    const requestedProjectId = req.params.id

    if (!requestedProjectId) {
      return res.sendStatus(400)
    }

    const foundProject = await Project.findById(requestedProjectId)

    if (!foundProject) {
      return res.sendStatus(404)
    }

    res.status(200).json(foundProject)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

// PUT /:id
const updateProject = async (req, res) => {
  try {
    const requestedProjectId = req.params.id

    if (!requestedProjectId) {
      return res.sendStatus(400)
    }

    const foundProject = await Project.findById(requestedProjectId)

    if (!foundProject) {
      return res.sendStatus(404)
    }

    const updatedProject = await Project.findByIdAndUpdate(
      foundProject._id,
      req.body,
      { new: true }
    )

    res.status(200).json(updatedProject)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

// DELETE /:id
const deleteProject = async (req, res) => {
  try {
    const requestedProjectId = req.params.id

    if (!requestedProjectId) {
      return res.sendStatus(400)
    }

    const foundProject = Project.findById(requestedProjectId)

    if (!foundProject) {
      return res.sendStatus(404)
    }

    await Project.findByIdAndDelete(foundProject._id)

    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
}
