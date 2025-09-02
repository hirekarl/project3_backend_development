const express = require("express")
const router = express.Router()

const { authMiddleware, userOwnsProject } = require("../../utils/auth")

const {
  getAllProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../../controllers/projectController")

router.get("/", authMiddleware, getAllProjects)
router.post("/", authMiddleware, createProject)
router.get("/:id", authMiddleware, userOwnsProject, getProjectById)
router.put("/:id", authMiddleware, userOwnsProject, updateProject)
router.delete("/:id", authMiddleware, userOwnsProject, deleteProject)

module.exports = router
