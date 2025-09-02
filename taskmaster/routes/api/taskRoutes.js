const express = require("express")
const router = express.Router()

const { authMiddleware } = require("../../utils/auth")

const {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../../controllers/taskController")

router.get("/", authMiddleware, getAllTasks)
router.post("/", authMiddleware, createTask)
router.get("/:id", authMiddleware, getTaskById)
router.put("/:id", authMiddleware, updateTask)
router.delete("/:id", authMiddleware, deleteTask)

module.exports = router
