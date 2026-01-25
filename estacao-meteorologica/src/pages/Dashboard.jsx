import { useEffect, useState } from "react"
import WeatherCard from "../components/WeatherCard"
import WeatherChart from "../components/WeatherChart"
import { Thermometer, Droplets, Wind, Gauge } from "lucide-react"
import { getWeatherData } from "../services/weatherService"
import { getWeatherHistory } from "../services/historyService"

export default function Dashboard() {
  const [weather, setWeather] = useState({
    temperature: 0,
    humidity: 0,
    wind: 0,
    pressure: 0,
  })

  const [history, setHistory] = useState([])

  useEffect(() => {
    async function loadWeather() {
      try {
        // Dados atuais
        const data = await getWeatherData()
        setWeather(data)

        // Histórico bruto da API
        const historyData = await getWeatherHistory()

        // 🔧 FORMATANDO PARA O GRÁFICO
        const formattedHistory = historyData.map(item => ({
          time: new Date(item.timestamp).toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temperature: item.temperature,
        }))

        setHistory(formattedHistory)
      } catch (error) {
        console.error("Erro ao carregar dashboard:", error)
      }
    }

    loadWeather()
  }, [])

  return (
    <>
      {/* Cards */}
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <WeatherCard
          title="Temperatura"
          value={weather.temperature}
          unit="°C"
          color="yellow"
          icon={<Thermometer size={28} />}
        />

        <WeatherCard
          title="Umidade"
          value={weather.humidity}
          unit="%"
          color="blue"
          icon={<Droplets size={28} />}
        />

        <WeatherCard
          title="Vento"
          value={weather.wind}
          unit="km/h"
          color="green"
          icon={<Wind size={28} />}
        />

        <WeatherCard
          title="Pressão"
          value={weather.pressure}
          unit="hPa"
          color="purple"
          icon={<Gauge size={28} />}
        />
      </main>

      {/* Gráfico */}
      <section className="p-6">
        <WeatherChart data={history} />
      </section>
    </>
  )
}