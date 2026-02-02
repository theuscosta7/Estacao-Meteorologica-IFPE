import api from "./api"

export async function getWeatherData() {
  try {
    const response = await api.get("/getAll")

    console.log("Dados recebidos do backend:", response.data)

    if (!response.data.length) {
      return {
        temperature: 0,
        humidity: null,
        pressure: 0,
        wind: 0,
      }
    }

    const sortedData = response.data.sort((a, b) =>
      new Date(b.createdAt) - new Date(a.createdAt)
    )

    const latest = sortedData[0]

    console.log("Último registro:", latest)

    return {
      temperature: latest.temperature || 0,
      humidity: latest.humidity ?? null,
      pressure: latest.pressure || 0,
      wind: 0,
    }
  } catch (error) {
    console.error("Erro ao buscar dados atuais:", error)
    return {
      temperature: 0,
      humidity: null,
      pressure: 0,
      wind: 0,
    }
  }
}

export async function getWeatherHistory() {
  try {
    const response = await api.get("/getAll")
    console.log("Histórico recebido:", response.data)

    return response.data
      .filter(item => item.station_id === "ESP32_01")
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  } catch (error) {
    console.error("Erro ao buscar histórico:", error)
    return []
  }
}