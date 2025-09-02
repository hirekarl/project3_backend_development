const mongoose = require("mongoose")
const { Schema, model } = mongoose

const taskStatuses = ["To Do", "In Progress", "Done"]

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: taskStatuses,
    default: "To Do",
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
})

// TODO: Add that validation check for each update

const Task = model("Task", taskSchema)

module.exports = Task
