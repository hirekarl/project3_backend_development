const express = require("express")
const router = express.Router()

const { authMiddleware, userOwnsTask } = require("../../utils/auth")

const {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../../controllers/taskController")

router.get("/", authMiddleware, getAllTasks)
router.post("/", authMiddleware, createTask)
router.get("/:id", authMiddleware, userOwnsTask, getTaskById)
router.put("/:id", authMiddleware, userOwnsTask, updateTask)
router.delete("/:id", authMiddleware, userOwnsTask, deleteTask)

module.exports = router
