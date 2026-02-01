const ReadingModel = require("../models/readingModel")

const ReadingController = {
    create: async (req, res) => {
        try {
            const reading = {
                station_id: req.body.station_id || "ESP32_01",
                temperature: req.body.temperature,
                pressure: req.body.pressure,
                air_quality: req.body.air_quality ?? 0,
                rain: req.body.rain ?? 0,
            };
            console.log('Dados recebidos:', req.body);
            console.log('Dados processados:', reading);

            const response = await ReadingModel.create(reading);
            res.status(201).json({
                success: true,
                data: response,
                msg: "Leituras registradas com sucesso!"
            });

        } catch (error) {
            console.error('Erro ao registrar leituras:', error);
            return res.status(500).json({
                success: false,
                msg: "Erro ao registrar leituras!",
                error: error.message
            });
        }
    },

    getAll: async (req, res) => {
        try {
            const readings = await ReadingModel.find().sort({ createdAt: -1 }).limit(100)
            return res.status(200).json(readings)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: "Erro ao buscar leituras!" })
        }
    }
}

module.exports = ReadingController