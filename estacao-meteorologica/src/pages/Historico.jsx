import { useEffect, useState } from "react"
import { getWeatherHistory } from "../services/historyService"

export default function Historico() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadHistory() {
      try {
        setLoading(true)
        console.log("Carregando histórico...")

        const response = await getWeatherHistory()
        console.log("DADOS DO BACKEND:", response)

        const formattedData = response.map(item => {
          const date = item.createdAt ? new Date(item.createdAt) : new Date()

          return {
            time: date.toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit"
            }),
            date: date.toLocaleDateString("pt-BR"),
            temperature: item.temperature !== undefined ? item.temperature.toFixed(1) : "--",
            humidity:
              item.humidity !== undefined && item.humidity !== null
                ? item.humidity.toFixed(1)
                : "--",
            pressure:
              item.pressure !== undefined && item.pressure !== null
                ? item.pressure.toFixed(1)
                : "--",
            air_quality: item.air_quality !== undefined ? item.air_quality : "--",
            rain: item.rain !== undefined ? item.rain : "--"
          }
        })

        console.log("Dados formatados:", formattedData)
        setData(formattedData)
      } catch (error) {
        console.error("Erro ao carregar histórico:", error)
      } finally {
        setLoading(false)
      }
    }

    loadHistory()
  }, [])

  if (loading) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow">
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-slate-600">Carregando histórico...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h1 className="text-xl font-semibold text-slate-800 mb-4">
        Histórico de Medições
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-slate-100 text-slate-600 text-sm">
              <th className="p-3 text-left">Data</th>
              <th className="p-3 text-left">Hora</th>
              <th className="p-3 text-left">Temperatura (°C)</th>
              <th className="p-3 text-left">Umidade (%)</th>
              <th className="p-3 text-left">Pressão (hPa)</th>
              <th className="p-3 text-left">Qual. Ar</th>
              <th className="p-3 text-left">Chuva</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="7" className="p-4 text-center text-slate-500">
                  Nenhum dado disponível
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr
                  key={index}
                  className="border-t text-slate-700 hover:bg-slate-50 text-sm"
                >
                  <td className="p-3">{item.date}</td>
                  <td className="p-3">{item.time}</td>
                  <td className="p-3">{item.temperature}</td>
                  <td className="p-3">{item.humidity}</td>
                  <td className="p-3">{item.pressure}</td>
                  <td className="p-3">{item.air_quality}</td>
                  <td className="p-3">{item.rain}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}