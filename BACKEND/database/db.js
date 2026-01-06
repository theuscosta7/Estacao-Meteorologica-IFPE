const mongoose = require("mongoose")

async function main() {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect('mongodb+srv://msc14_db_user:rqyvergz25@cluster0.bzjng8z.mongodb.net/?appName=Cluster0')
        console.log("Conectado ao Mongodb!")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main;