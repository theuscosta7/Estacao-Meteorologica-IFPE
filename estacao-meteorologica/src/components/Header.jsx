import { CloudSun } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <CloudSun className="text-blue-500" size={28} />
        <h1 className="text-xl font-bold text-slate-800">
          Estação Meteorológica Web
        </h1>
      </div>

      <nav className="flex gap-6 text-slate-600">
        <a href="#" className="hover:text-blue-500">Dashboard</a>
        <a href="#" className="hover:text-blue-500">Histórico</a>
        <a href="#" className="hover:text-blue-500">Relatórios</a>
        <a href="#" className="hover:text-blue-500">Configurações</a>
      </nav>
    </header>
  )
}