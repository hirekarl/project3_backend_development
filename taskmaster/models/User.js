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
      match: [/.+@.+\..+/, "Must use a valid email address"],
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

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10
    this.password = await bcrypt.hash(this.password, saltRounds)
  }

  next()
})

userSchema.methods.checkPassword = async function (password) {
  return bcrypt.compare(password, this.password)
}

mongoose.set("runValidators", true)

const User = model("User", userSchema)

module.exports = User
