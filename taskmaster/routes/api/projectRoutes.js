const express = require("express")
const router = express.Router()

const { authMiddleware } = require("../../utils/auth")

const {
  getAllProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../../controllers/projectController")

router.get("/", authMiddleware, getAllProjects)
router.post("/", authMiddleware, createProject)
router.get("/:id", authMiddleware, getProjectById)
router.put("/:id", authMiddleware, updateProject)
router.delete("/:id", authMiddleware, deleteProject)

module.exports = router
