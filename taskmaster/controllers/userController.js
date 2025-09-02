const jwt = require("jsonwebtoken")

const User = require("../models/User")

const { JWT_SECRET, JWT_EXPIRY } = require("../utils")

// POST /api/users/register
const createUser = async (req, res) => {
  try {
    const foundUser = await User.findOne({ email: req.body.email })

    if (foundUser) {
      return res.status(409).json({ message: "User already exists." })
    }

    const createdUser = await User.create(req.body)

    jwt.sign(
      {
        data: createdUser,
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRY },
      (error, token) => {
        if (error) throw error
        res.status(201).json({ user: createdUser, token })
      }
    )
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: "There was a problem creating a new user." })
  }
}

// POST /api/users/login
const loginUser = async (req, res) => {
  try {
    const foundUser = await User.findOne({ email: req.body.email })

    if (!foundUser) {
      return res.status(401).json({
        message: "Incorrect username or password.",
      })
    }

    const isPasswordCorrect = await foundUser.checkPassword(req.body.password)

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Incorrect username or password.",
      })
    }

    jwt.sign(
      { data: foundUser },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRY },
      (error, token) => {
        if (error) throw error
        res.status(200).json({ user: foundUser, token })
      }
    )
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "There was a problem logging you in." })
  }
}

module.exports = { createUser, loginUser }
