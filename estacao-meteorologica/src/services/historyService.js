import api from "./api"

export async function getWeatherHistory() {
  const response = await api.get("/getAll")

  return response.data
    .filter(item => item.station_id === "ESP32_01") 
    .slice()
    .reverse()
}