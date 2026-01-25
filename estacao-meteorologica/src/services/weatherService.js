import api from "./api"

export async function getWeatherData() {
  const response = await api.get("/getAll")

  const latest = response.data[0]

  if (!latest) {
    return {
      temperature: 0,
      humidity: 0,
      wind: 0,
      pressure: 0,
    }
  }

  return {
    temperature: latest.temperature,
    humidity: latest.humidity,
    pressure: latest.pressure,
    wind: 0, 
  }
}