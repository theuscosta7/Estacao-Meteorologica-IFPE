import { useEffect, useState } from "react"
import WeatherCard from "../components/WeatherCard"
import WeatherChart from "../components/WeatherChart"
import { Thermometer, Droplets, Gauge } from "lucide-react"
import { getWeatherData } from "../services/weatherService"
import { getWeatherHistory } from "../services/historyService"

export default function Dashboard() {
  const [weather, setWeather] = useState({
    temperature: 0,
    humidity: 0,
    pressure: 0,
  })

  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadWeather() {
      try {
        setLoading(true)
        console.log("Carregando dados do dashboard...")

        const currentData = await getWeatherData()
        console.log("Dados atuais carregados:", currentData)
        setWeather(currentData)

        const historyData = await getWeatherHistory()
        console.log("Histórico carregado:", historyData)

        const lastTen = historyData.slice(0, 10).reverse()

        const formattedHistory = lastTen.map(item => ({
          time: new Date(item.createdAt).toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temperature: item.temperature || 0,
        }))

        console.log("Histórico formatado para gráfico:", formattedHistory)
        setHistory(formattedHistory)
      } catch (error) {
        console.error("Erro ao carregar dashboard:", error)
      } finally {
        setLoading(false)
      }
    }

    loadWeather()
  }, [])

  if (loading) {
    return (
      <div className="p-6 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p className="mt-2 text-slate-600">Carregando dados...</p>
      </div>
    )
  }

  return (
    <>
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <WeatherCard
          title="Temperatura"
          value={weather.temperature}
          unit="°C"
          color="yellow"
          icon={<Thermometer size={28} />}
        />

        <WeatherCard
          title="Umidade"
          value={weather.humidity ?? "--"}
          unit="%"
          color="blue"
          icon={<Droplets size={28} />}
        />

        <WeatherCard
          title="Pressão"
          value={weather.pressure}
          unit="hPa"
          color="purple"
          icon={<Gauge size={28} />}
        />
      </main>

      <section className="p-6">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          Variação de Temperatura (Últimas 10 medições)
        </h2>
        {history.length > 0 ? (
          <WeatherChart data={history} />
        ) : (
          <div className="bg-white rounded-xl p-8 text-center shadow">
            <p className="text-slate-500">Nenhum dado disponível para exibir no gráfico</p>
          </div>
        )}
      </section>
    </>
  )
}