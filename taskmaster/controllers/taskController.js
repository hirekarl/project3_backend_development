const Task = require("../models/Task")

// GET /
const getAllTasks = async (req, res) => {
  try {

  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

// POST /
const createTask = async (req, res) => {
  try {

  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

// GET /:id
const getTaskById = async (req, res) => {
  try {

  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

// PUT /:id
const updateTask = async (req, res) => {
  try {

  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

// DELETE /:id
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
