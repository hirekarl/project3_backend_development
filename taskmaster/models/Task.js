const mongoose = require("mongoose")
const { Schema, model } = mongoose

const taskSchema = new Schema({})

const Task = model("Task", taskSchema)

module.exports = Task
