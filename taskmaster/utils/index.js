const path = require("path")
require("dotenv").config(path.resolve(__dirname, "../.env"))

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
const JWT_SECRET = process.env.JWT_SECRET

module.exports = { PORT, MONGO_URI, JWT_SECRET }
