const express = require("express")

const connect = require("./config/connection")

const { PORT } = require("./utils")

const run = async () => {
  await connect()

  app = express()

  app.use(express.json())

  // TODO

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}.`)
  })
}

run()
