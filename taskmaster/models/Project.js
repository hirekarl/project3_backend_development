const mongoose = require("mongoose")
const { Schema, model } = mongoose

const projectSchema = new Schema({})

const Project = model("Project", projectSchema)

module.exports = Project
