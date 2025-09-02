const mongoose = require("mongoose")
const { Schema, model } = mongoose

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
})

// TODO: Add that validation check for each update

const Project = model("Project", projectSchema)

module.exports = Project
