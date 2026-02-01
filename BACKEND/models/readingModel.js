const mongoose = require("mongoose")
const { Schema } = mongoose

const ReadingSchema = new Schema({
    station_id: String,
    temperature: Number,
    humidity: Number,
    pressure: Number,
    air_quality: Number,
    rain: Number,
},
    {
        timestamps: true
    }
)



const Reading = mongoose.model("Reading", ReadingSchema)
module.exports = Reading
