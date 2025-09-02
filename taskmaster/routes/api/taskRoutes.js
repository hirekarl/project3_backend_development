const express = require("express")
const router = express.Router()

const { authMiddleware, userOwnsTask } = require("../../utils/auth")

const {
  updateTask,
  deleteTask,
} = require("../../controllers/taskController")

router.put("/:taskId", authMiddleware, userOwnsTask, updateTask)
router.delete("/:taskId", authMiddleware, userOwnsTask, deleteTask)

module.exports = router
