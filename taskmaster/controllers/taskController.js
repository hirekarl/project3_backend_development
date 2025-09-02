const Task = require("../models/Task")

// PUT /api/tasks/:taskId
const updateTask = async (req, res) => {
  try {
    const requestedTaskId = req.params.taskId

    if (!requestedTaskId) {
      return res.sendStatus(400)
    }

    const foundTask = await Task.findById(requestedTaskId)

    if (!foundTask) {
      return res.sendStatus(404)
    }

    const updatedTask = await Task.findByIdAndUpdate(foundTask._id, req.body, {
      new: true,
    })

    res.status(200).json(updatedTask)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

// DELETE /api/tasks/:taskId
const deleteTask = async (req, res) => {
  try {
    const requestedTaskId = req.params.taskId

    if (!requestedTaskId) {
      return res.sendStatus(400)
    }

    const foundTask = await Task.findById(requestedTaskId)

    if (!foundTask) {
      return res.sendStatus(404)
    }

    await Task.findByIdAndDelete(foundTask._id)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}

module.exports = {
  updateTask,
  deleteTask,
}
