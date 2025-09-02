const mongoose = require("mongoose")
const { Schema, model } = mongoose

const bcrypt = require("bcrypt")

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // TODO: add RegEx check
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  {
    toJSON: {
      transform: (_doc, ret) => {
        delete ret.password
        delete ret.__v
        return ret
      },
    },
  }
)

userSchema.pre("save", () => {
  // TODO
})

// TODO: Add that validation check for each update

const User = model("User", userSchema)

module.exports = User
