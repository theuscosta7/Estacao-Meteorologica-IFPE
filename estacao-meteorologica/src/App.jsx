import WeatherCard from "./components/WeatherCard"
import Header from "./components/Header"
import { Thermometer, Droplets, Wind, Gauge } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      
      <Header />
      {/* Header */}
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">
          🌤️ Estação Meteorológica Web
        </h1>

        <nav className="space-x-6 text-slate-600 font-medium">
          <a className="hover:text-blue-600 cursor-pointer">Dashboard</a>
          <a className="hover:text-blue-600 cursor-pointer">Histórico</a>
          <a className="hover:text-blue-600 cursor-pointer">Relatórios</a>
          <a className="hover:text-blue-600 cursor-pointer">Configurações</a>
        </nav>
      </header>

      {/* Conteúdo principal */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

  <WeatherCard
    title="Temperatura"
    value="27"
    unit="°C"
    icon={<Thermometer size={32} />}
  />

  <WeatherCard
    title="Umidade"
    value="68"
    unit="%"
    icon={<Droplets size={32} />}
  />

  <WeatherCard
    title="Vento"
    value="12"
    unit="km/h"
    icon={<Wind size={32} />}
  />

  <WeatherCard
    title="Pressão"
    value="1013"
    unit="hPa"
    icon={<Gauge size={32} />}
  />

</main>

    </div>
  );
}

export default App;