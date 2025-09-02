const Task = require("../models/Task")

// TODO: Redo routes by spec.
// GET /tasks
// const getAllTasks = async (req, res) => {
//   try {

//   } catch (error) {
//     console.error(error)
//     res.sendStatus(500)
//   }
// }

// POST /
// const createTask = async (req, res) => {
//   try {

//   } catch (error) {
//     console.error(error)
//     res.sendStatus(500)
//   }
// }

// GET /:id
// const getTaskById = async (req, res) => {
//   try {

//   } catch (error) {
//     console.error(error)
//     res.sendStatus(500)
//   }
// }

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
