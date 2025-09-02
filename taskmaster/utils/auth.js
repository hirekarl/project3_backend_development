const jwt = require("jsonwebtoken")

const { JWT_SECRET, JWT_EXPIRY } = require("./index")

const authMiddleware = (req, res, next) => {
  let token = req.headers.authorization

  if (token) {
    token = token.split(" ").pop().trim()
  } else {
    return res.sendStatus(401)
  }

  try {
    const { data } = jwt.verify(token, JWT_SECRET, { maxAge: JWT_EXPIRY })
    req.user = data
  } catch (error) {
    console.error("Invalid token:", error)
  }

  next()
}

const userIsOwner = (req, res, next) => {}

module.exports = { authMiddleware, userIsOwner }
