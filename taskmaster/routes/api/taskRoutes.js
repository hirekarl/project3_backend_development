const express = require("express")
const router = express.Router()

const { authMiddleware, userOwnsTask } = require("../../utils/auth")

const {
  // getAllTasks,
  // createTask,
  // getTaskById,
  updateTask,
  deleteTask,
} = require("../../controllers/taskController")

// TODO: Redo these routes per spec.
// router.get("/", authMiddleware, getAllTasks)
// router.post("/", authMiddleware, createTask)
// router.get("/:id", authMiddleware, userOwnsTask, getTaskById)
router.put("/:taskId", authMiddleware, userOwnsTask, updateTask)
router.delete("/:taskId", authMiddleware, userOwnsTask, deleteTask)

module.exports = router
