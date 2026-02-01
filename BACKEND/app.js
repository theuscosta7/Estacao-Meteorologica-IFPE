const db = require("./database/db")
db()

require("./mqtt/mqttClient")

console.log("Backend MQTT ativo")
