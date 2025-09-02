const mongoose = require("mongoose")
const { Schema, model } = mongoose

const projectSchema = new Schema(
  {
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
  },
  {
    toJSON: {
      transform: (_doc, ret) => {
        delete ret.__v
        return ret
      },
    },
  }
)

mongoose.set("runValidators", true)

const Project = model("Project", projectSchema)

module.exports = Project
