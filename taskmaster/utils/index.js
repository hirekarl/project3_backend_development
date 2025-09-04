const path = require("path")
require("dotenv").config(path.resolve(__dirname, "../.env"))

const PORT = process.env.PORT || 3001
const MONGO_URI = process.env.MONGO_URI
const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRY = "2h"

module.exports = { PORT, MONGO_URI, JWT_SECRET, JWT_EXPIRY }
