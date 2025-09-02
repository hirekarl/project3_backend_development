const express = require("express")
const router = express.Router()

const {authMiddleware} = require("../../utils/auth")

const {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController")

router.post("/", createUser)
router.post("/login", loginUser)
router.put("/:id", authMiddleware, updateUser)
router.delete("/:id", authMiddleware, deleteUser)

module.exports = router
