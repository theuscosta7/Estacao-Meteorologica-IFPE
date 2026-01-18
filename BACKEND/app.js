const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

const db = require("./database/db")
db()

const routes = require("./routes/router")
app.use("/api", routes)

const port = 3000

app.listen(port, "0.0.0.0", () => {
    console.log(`Servidor ativo em http://192.168.18.159:${port}`)
})
