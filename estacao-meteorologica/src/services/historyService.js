import api from "./api"

export async function getWeatherHistory() {
  try {
    const response = await api.get("/getAll")

    console.log("Dados do backend em historyService:", response.data)

    return response.data
      .filter(item => item.station_id === "ESP32_01")
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
  } catch (error) {
    console.error("Erro ao buscar histórico:", error)
    return []
  }
}

export async function getAllReadings() {
  try {
    const response = await api.get("/getAll")
    return response.data
  } catch (error) {
    console.error("Erro ao buscar leituras:", error)
    return []
  }
}