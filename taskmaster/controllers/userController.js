const User = require("../models/User")
const jwt = require("jsonwebtoken")

const { JWT_SECRET, JWT_EXPIRY } = require("../utils")

// POST /api/users/register
const createUser = async (req, res) => {
  try {
    const foundUser = await User.findOne({ email: req.body.email })

    if (foundUser) {
      return res.sendStatus(409)
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
    res.sendStatus(400)
  }
}

// POST /api/users/login
const loginUser = async (req, res) => {
  try {
    const foundUser = await User.findOne({ email: req.body.email })

    if (!foundUser) {
      return res.sendStatus(400)
    }

    const isPasswordCorrect = await foundUser.checkPassword(req.body.password)

    if (!isPasswordCorrect) {
      return res.sendStatus(400)
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
    res.sendStatus(400)
  }
}

// PUT /api/users/:id
// const updateUser = async (req, res) => {
//   try {
//     const requestedUserId = req.params.id

//     if (!requestedUserId) {
//       return res.sendStatus(400)
//     }

//     const foundUser = User.findById(requestedUserId)

//     if (!foundUser) {
//       return res.sendStatus(404)
//     }

//     const updatedUser = await User.findByIdAndUpdate(foundUser._id, req.body, {
//       new: true,
//     })

//     res.status(200).json(updatedUser)
//   } catch (error) {
//     console.error(error)
//     res.sendStatus(500)
//   }
// }

// DELETE /api/users/:id
// const deleteUser = async (req, res) => {
//   try {
//     const requestedUserId = req.params.id

//     if (!requestedUserId) {
//       return res.sendStatus(400)
//     }

//     const foundUser = await User.findById(requestedUserId)

//     if (!foundUser) {
//       return res.sendStatus(404)
//     }

//     await User.findByIdAndDelete(foundUser._id)

//     res.status(200)
//   } catch (error) {
//     console.error(error)
//     res.sendStatus(500)
//   }
// }

module.exports = { createUser, loginUser, /* updateUser, deleteUser */ }
