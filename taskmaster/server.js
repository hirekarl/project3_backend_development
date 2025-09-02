const express = require("express")

const connect = require("./config/connection")
const { PORT } = require("./utils")

const routes = require("./routes")

const run = async () => {
  await connect()

  app = express()

  app.use(express.json())

  app.use("/api", routes)

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}.`)
  })
}

run()
