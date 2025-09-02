const Task = require("../models/Task")

// PUT /api/tasks/:taskId
const updateTask = async (req, res) => {
  try {
    const requestedTaskId = req.params.taskId

    if (!requestedTaskId) {
      return res.status(400).json({ message: "Missing task ID." })
    }

    const foundTask = await Task.findById(requestedTaskId)

    if (!foundTask) {
      return res.status(404).json({ message: "Couldn't find task." })
    }

    const updatedTask = await Task.findByIdAndUpdate(foundTask._id, req.body, {
      new: true,
    })

    res.status(200).json(updatedTask)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "There was a problem updating the task." })
  }
}

// DELETE /api/tasks/:taskId
const deleteTask = async (req, res) => {
  try {
    const requestedTaskId = req.params.taskId

    if (!requestedTaskId) {
      return res.status(400).json({ message: "Missing task ID." })
    }

    const foundTask = await Task.findById(requestedTaskId)

    if (!foundTask) {
      return res.status(404).json({ message: "Couldn't find task." })
    }

    await Task.findByIdAndDelete(foundTask._id)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "There was a problem deleting the task." })
  }
}

module.exports = {
  updateTask,
  deleteTask,
}
