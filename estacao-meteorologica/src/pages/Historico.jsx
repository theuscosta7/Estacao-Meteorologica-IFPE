import { useEffect, useState } from "react"
import { getWeatherHistory } from "../services/historyService"

export default function Historico() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function loadHistory() {
      try {
        const response = await getWeatherHistory()

        console.log("DADOS DO BACKEND:", response)

        const formattedData = response.map(item => {
          const date = item.timestamp
            ? new Date(item.timestamp)
            : item.createdAt
              ? new Date(item.createdAt)
              : new Date()

          return {
            time: date.toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit"
            }),
            temperature: item.temperature ?? "--",
            humidity:
              item.humidity !== undefined && item.humidity !== null
                ? item.humidity
                : "--",
            pressure:
              item.pressure !== undefined && item.pressure !== null
                ? item.pressure
                : "--"
          }
        })

        setData(formattedData)
      } catch (error) {
        console.error("Erro ao carregar histórico:", error)
      }
    }

    loadHistory()
  }, [])

  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h1 className="text-xl font-semibold text-slate-800 mb-4">
        Histórico de Medições
      </h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-100 text-slate-600">
            <th className="p-3 text-left">Hora</th>
            <th className="p-3 text-left">Temperatura (°C)</th>
            <th className="p-3 text-left">Umidade (%)</th>
            <th className="p-3 text-left">Pressão (hPa)</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="4" className="p-4 text-center text-slate-500">
                Nenhum dado disponível
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr
                key={index}
                className="border-t text-slate-700 hover:bg-slate-50"
              >
                <td className="p-3">{item.time}</td>
                <td className="p-3">{item.temperature}</td>
                <td className="p-3">{item.humidity}</td>
                <td className="p-3">{item.pressure}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}