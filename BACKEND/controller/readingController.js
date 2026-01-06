const ReadingModel = require("../models/readingModel")

const ReadingController = {
    create: async (req, res) => {
        try {
            const reading = {
                station_id: req.body.station_id,
                temperature: req.body.temperature,
                humidity: req.body.humidity,
                pressure: req.body.pressure,
                air_quality: req.body.air_quality,
                rain: req.body.rain,
                timestamp: req.body.timestamp
            }

            const response = await ReadingModel.create(reading)
            res.status(201).json({ response, msg: "Leituras registradas com sucesso!" })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: "Erro ao registrar leituras!" })
        }
    },

    getAll: async (req, res) => {
        try {
            const readings = await ReadingModel.find().sort({ timestamp: -1 }).limit(100)
            return res.status(200).json(readings)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: "Erro ao buscar leituras!" })
        }
    }
}

module.exports = ReadingController