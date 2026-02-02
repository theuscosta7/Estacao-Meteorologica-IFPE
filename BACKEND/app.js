const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const db = require("./database/db")
db()

require("./mqtt/mqttClient")

const routes = require("./routes/router")
app.use("/api", routes)

const port = 3000
app.listen(port, () => {
    console.log(`Servidor ativo em http://localhost:${port}`)
})
