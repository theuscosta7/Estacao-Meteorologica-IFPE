export function getWeatherData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        temperature: 27,
        humidity: 68,
        wind: 12,
        pressure: 1013,
      })
    }, 1000)
  })
}