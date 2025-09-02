const express = require("express")
const router = express.Router()

const {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController")

router.post("/", createUser)
router.post("/login", loginUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

module.exports = router
