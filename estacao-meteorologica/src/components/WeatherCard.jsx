export default function WeatherCard({ title, value, unit, icon, color = "blue" }) {
  const colors = {
    blue: "from-blue-500 to-blue-600",
    yellow: "from-yellow-400 to-yellow-500",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    red: "from-red-500 to-red-600",
  }

  return (
    <div
      className={`rounded-2xl p-6 text-white shadow-lg bg-gradient-to-br ${
        colors[color] || colors.blue
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90">{title}</p>
          <h2 className="text-3xl font-bold mt-1">
            {value}
            <span className="text-lg font-medium ml-1">{unit}</span>
          </h2>
        </div>

        <div className="opacity-90">
          {icon}
        </div>
      </div>
    </div>
  )
}