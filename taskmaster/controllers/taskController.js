const Task = require("../models/Task")

// PUT /api/tasks/:taskId
const updateTask = async (req, res) => {
  try {

  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

// DELETE /api/tasks/:taskId
const deleteTask = async (req, res) => {
  try {

  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
}
