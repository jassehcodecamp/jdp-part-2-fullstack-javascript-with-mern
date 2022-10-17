import AppAside from "./Components/AppAside"
import AppMain from "./Components/AppMain"
function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row text-lg">
      <AppAside />
      <AppMain />
    </div>
  )
}

export default App
