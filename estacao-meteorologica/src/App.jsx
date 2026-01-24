import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Layout from "./components/Layout"

import Dashboard from "./pages/Dashboard"
import Historico from "./pages/Historico"
import Relatorios from "./pages/Relatorios"
import Configuracoes from "./pages/Configuracoes"

function App() {
  return (
    <>
      <Header />

      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App