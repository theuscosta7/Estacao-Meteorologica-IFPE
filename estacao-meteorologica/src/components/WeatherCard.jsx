export default function WeatherCard({ title, value, unit, icon }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow flex items-center gap-4">
      <div className="text-blue-500">
        {icon}
      </div>

      <div>
        <p className="text-slate-500">{title}</p>
        <h2 className="text-3xl font-bold text-slate-800">
          {value} {unit}
        </h2>
      </div>
    </div>
  )
}