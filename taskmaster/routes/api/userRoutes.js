const express = require("express")
const router = express.Router()

const { authMiddleware, userOwnsUser } = require("../../utils/auth")

const {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController")

router.post("/register", createUser)
router.post("/login", loginUser)
router.put("/:id", authMiddleware, userOwnsUser, updateUser)
router.delete("/:id", authMiddleware, userOwnsUser, deleteUser)

module.exports = router
