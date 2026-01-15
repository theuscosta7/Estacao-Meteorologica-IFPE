import { useEffect, useState } from "react"
import WeatherCard from "./components/WeatherCard"
import Header from "./components/Header"
import { Thermometer, Droplets, Wind, Gauge } from "lucide-react"
import { getWeatherData } from "./services/weatherService"
import WeatherChart from "./components/WeatherChart"
import { getWeatherHistory } from "./services/historyService"

function App() {
  const [weather, setWeather] = useState({
    temperature: 0,
    humidity: 0,
    wind: 0,
    pressure: 0,
  })

  const [history, setHistory] = useState([])

  useEffect(() => {
    async function loadWeather() {
      const data = await getWeatherData()
      setWeather(data)
    }

    loadWeather()
    setHistory(getWeatherHistory())
  }, [])

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <Header />

      {/* Cards */}
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <WeatherCard
          title="Temperatura"
          value={weather.temperature}
          unit="°C"
          icon={<Thermometer size={32} />}
        />

        <WeatherCard
          title="Umidade"
          value={weather.humidity}
          unit="%"
          icon={<Droplets size={32} />}
        />

        <WeatherCard
          title="Vento"
          value={weather.wind}
          unit="km/h"
          icon={<Wind size={32} />}
        />

        <WeatherCard
          title="Pressão"
          value={weather.pressure}
          unit="hPa"
          icon={<Gauge size={32} />}
        />
      </main>

      {/* Gráfico */}
      <section className="p-6">
        <WeatherChart data={history} />
      </section>
    </div>
  )
}

export default App