export async function getWeatherData() {
  const response = await api.get("/getAll")

  if (!response.data.length) {
    return {
      temperature: 0,
      humidity: null,
      pressure: 0,
      wind: 0,
    }
  }

  const latest = response.data[0]

  return {
    temperature: latest.temperature,
    humidity: latest.humidity ?? null,
    pressure: latest.pressure,
    wind: 0,
  }
}
