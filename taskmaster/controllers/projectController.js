const Project = require("../models/Project")
const Task = require("../models/Task")

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
    res
      .status(500)
      .json({ message: "There was a problem creating a new project." })
  }
}

// GET /api/projects
const getAllProjects = async (req, res) => {
  try {
    const authenticatedUserId = req.user._id

    const allProjects = await Project.find({ user: authenticatedUserId })

    res.status(200).json(allProjects)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "There was a problem getting projects." })
  }
}

// GET /api/projects/:id
const getProjectById = async (req, res) => {
  try {
    const requestedProjectId = req.params.id

    if (!requestedProjectId) {
      return res.status(400).json({ message: "Missing project ID." })
    }

    const foundProject = await Project.findById(requestedProjectId)

    if (!foundProject) {
      return res.status(404).json({ message: "Couldn't find project." })
    }

    res.status(200).json(foundProject)
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: "There was a problem getting this project." })
  }
}

// PUT /api/projects/:id
const updateProject = async (req, res) => {
  try {
    const requestedProjectId = req.params.id

    if (!requestedProjectId) {
      return res.status(400).json({ message: "Missing project ID." })
    }

    const foundProject = await Project.findById(requestedProjectId)

    if (!foundProject) {
      return res.status(404).json({ message: "Couldn't find project." })
    }

    const updatedProject = await Project.findByIdAndUpdate(
      foundProject._id,
      req.body,
      { new: true }
    )

    res.status(200).json(updatedProject)
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: "There was a problem getting this project." })
  }
}

// DELETE /api/projects/:id
const deleteProject = async (req, res) => {
  try {
    const requestedProjectId = req.params.id

    if (!requestedProjectId) {
      return res.status(400).json({ message: "Missing project ID." })
    }

    const foundProject = await Project.findById(requestedProjectId)

    if (!foundProject) {
      return res.status(404).json({ message: "Couldn't find project." })
    }

    await Project.findByIdAndDelete(foundProject._id)

    res.status(200).json({ message: "Project deleted." })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: "There was a problem deleting this project." })
  }
}

// POST /api/projects/:projectId/tasks
const createTaskByProjectId = async (req, res) => {
  try {
    const requestedProjectId = req.params.projectId

    if (!requestedProjectId) {
      return res.status(400).json({ message: "Missing project ID." })
    }

    const foundProject = await Project.findById(requestedProjectId)

    if (!foundProject) {
      return res.status(404).json({ message: "Couldn't find tasks." })
    }

    const newTask = await Task.create({
      ...req.body,
      project: requestedProjectId,
    })

    res.status(201).json(newTask)
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: "There was a problem creating a new task." })
  }
}

// GET /api/projects/:projectId/tasks
const getTasksByProjectId = async (req, res) => {
  try {
    const requestedProjectId = req.params.projectId

    const foundProject = await Project.findById(requestedProjectId)

    if (!foundProject) {
      return res.status(404).json({ message: "Couldn't find tasks." })
    }

    const foundTasks = await Task.find({ project: requestedProjectId })

    res.status(200).json(foundTasks)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "There was a problem getting tasks." })
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
