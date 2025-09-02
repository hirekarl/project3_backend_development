const express = require("express")
const router = express.Router()

const { authMiddleware, userOwnsProject } = require("../../utils/auth")

const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  createTaskByProjectId,
  getTasksByProjectId
} = require("../../controllers/projectController")

router.post("/", authMiddleware, createProject)
router.get("/", authMiddleware, getAllProjects)
router.get("/:id", authMiddleware, userOwnsProject, getProjectById)
router.put("/:id", authMiddleware, userOwnsProject, updateProject)
router.delete("/:id", authMiddleware, userOwnsProject, deleteProject)

router.post("/:projectId/tasks", authMiddleware, userOwnsProject, createTaskByProjectId)
router.get("/:projectId/tasks", authMiddleware, userOwnsProject, getTasksByProjectId)

module.exports = router
