import { useEffect, useState } from "react"
import { getWeatherHistory } from "../services/historyService"

export default function Historico() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(getWeatherHistory())
  }, [])

  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h1 className="text-xl font-semibold text-slate-800 mb-4">
        Histórico de Mediões
      </h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-100 text-slate-600">
            <th className="p-3 text-left">Hora</th>
            <th className="p-3 text-left">Temperatura (°C)</th>
            <th className="p-3 text-left">Umidade (%)</th>
            <th className="p-3 text-left">Vento (km/h)</th>
            <th className="p-3 text-left">Pressão (hPa)</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-t text-slate-700 hover:bg-slate-50"
            >
              <td className="p-3">{item.time}</td>
              <td className="p-3">{item.temperature}</td>
              <td className="p-3">{item.humidity}</td>
              <td className="p-3">{item.wind}</td>
              <td className="p-3">{item.pressure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}