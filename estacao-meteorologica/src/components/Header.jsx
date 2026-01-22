import { CloudSun } from "lucide-react"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm px-6 py-4 flex items-center justify-between z-50">
      {/* Logo / Título */}
      <div className="flex items-center gap-2">
        <CloudSun className="text-blue-500" size={28} />
        <h1 className="text-xl font-bold text-slate-800">
          Estação Meteorológica Web
        </h1>
      </div>

      {/* Navegação */}
      <nav className="space-x-6 text-slate-600 font-medium">
        <Link to="/" className="hover:text-blue-600">
          Dashboard
        </Link>

        <Link to="/historico" className="hover:text-blue-600">
          Histórico
        </Link>

        <Link to="/relatorios" className="hover:text-blue-600">
          Relatórios
        </Link>

        <Link to="/configuracoes" className="hover:text-blue-600">
          Configurações
        </Link>
      </nav>
    </header>
  )
}