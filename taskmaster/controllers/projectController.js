const Project = require("../models/Project")

// POST /api/projects
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

// GET /api/projects
const getAllProjects = async (req, res) => {
  try {
    const authenticatedUserId = req.user._id

    const allProjects = Project.find({ user: authenticatedUserId })

    if (allProjects.length < 1) {
      return res.sendStatus(404)
    }

    res.status(200).json(allProjects)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

// GET /api/projects/:id
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

// PUT /api/projects/:id
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

// DELETE /api/projects/:id
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

// POST /api/projects/:projectId/tasks
const createTaskByProjectId = async (req, res) => {
  try {
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

// GET /api/projects/:projectId/tasks
const getTasksByProjectId = async (req, res) => {
  try {
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  createTaskByProjectId,
  getTasksByProjectId,
}
