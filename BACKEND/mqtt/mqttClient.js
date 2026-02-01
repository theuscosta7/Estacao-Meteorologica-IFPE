const mqtt = require("mqtt")
const ReadingModel = require("../models/readingModel")

const options = {
    host: "d1361234416b4f7d9767370aa76103f6.s1.eu.hivemq.cloud",
    port: 8883,
    protocol: "mqtts",
    username: "esp32",
    password: "A12345678a",
    reconnectPeriod: 5000
}

const client = mqtt.connect(options)

client.on("connect", () => {
    console.log("Conectado ao HiveMQ Cloud")
    client.subscribe("estacao/+/readings")
})

client.on("message", async (topic, message) => {
    try {
        const data = JSON.parse(message.toString())

        const reading = {
            station_id: data.station_id || "ESP32_01",
            temperature: data.temperature,
            humidity: data.humidity,
            pressure: data.pressure,
            air_quality: data.air_quality,
            rain: data.rain || 0,
        }

        await ReadingModel.create(reading)
        console.log("Salvo:", reading)

    } catch (err) {
        console.error("Erro MQTT:", err.message)
    }
})

client.on("error", err => {
    console.error("MQTT erro:", err.message)
})

module.exports = client
