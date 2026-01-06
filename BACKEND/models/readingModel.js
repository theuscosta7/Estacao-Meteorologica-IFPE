const mongoose = require("mongoose")
const { Schema } = mongoose

const ReadingSchema = new Schema({
    station_id: {
        type: String,
        default: "ESP32_01"
    },

    timestamp: {
        type: Date,
        default: Date.now,
        required: true
    },

    temperature: {
        type: Number,
        required: true
    },

    humidity: Number,
    pressure: Number,
    air_quality: Number,
    rain: Number,

}, { timestamps: true })

const Reading = mongoose.model("Reading", ReadingSchema)
module.exports = Reading
