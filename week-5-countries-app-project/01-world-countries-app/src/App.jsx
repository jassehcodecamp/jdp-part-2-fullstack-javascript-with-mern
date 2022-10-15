import { Link, Outlet, useNavigation } from "react-router-dom"
import "./App.css"
import MoonIcon from "./Components/MoonIcon"
import LoadingUiState from "./Components/LoadingUiState"
import { useEffect } from "react"

function App() {
  const navigation = useNavigation()
  const toggleDarkMode = () => {
    const root = document.documentElement
    const currentTheme = root.dataset.theme

    if (currentTheme == "light") {
      root.dataset.theme = "dark"
      localStorage.setItem("theme", "dark")
    } else {
      root.dataset.theme = "light"
      localStorage.setItem("theme", "light")
    }
  }

  useEffect(() => {
    const theme = localStorage.getItem("theme")

    if (theme && ["dark", "light"].includes(theme)) {
      const root = document.documentElement
      root.dataset.theme = theme
    }
  }, [])
  return (
    <>
      <header>
        <div>
          <h1>
            <Link to="/">Where in the world?</Link>
          </h1>

          <div>
            <span className="dark-mode-toggler" onClick={toggleDarkMode}>
              <MoonIcon style={{ marginRight: "12px", width: "20px" }} /> Dark
              Mode
            </span>
          </div>
        </div>
      </header>
      <main>
        {navigation.state == "loading" ? <LoadingUiState /> : <Outlet />}
      </main>
      {/* <footer>
        <p>This is our footer</p>
      </footer> */}
    </>
  )
}

export default App
