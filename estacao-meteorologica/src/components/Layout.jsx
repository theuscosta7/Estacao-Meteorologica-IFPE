export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        {children}
      </div>
    </div>
  )
}