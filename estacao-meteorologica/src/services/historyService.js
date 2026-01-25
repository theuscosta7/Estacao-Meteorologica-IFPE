import api from "./api"

export async function getWeatherHistory() {
  const response = await api.get("/getAll")

  return response.data
    .slice()
    .reverse()
    .map(item => ({
      time: new Date(item.timestamp).toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
      }),
      temperature: item.temperature
    }))
}