import { Link, Outlet, useNavigation } from "react-router-dom"
import "./App.css"
import LoadingSpinner from "./Components/LoadingSpinner"
import MoonIcon from "./Components/MoonIcon"

function App() {
  const navigation = useNavigation()
  const toggleDarkMode = () => {
    const root = document.documentElement
    const currentTheme = root.dataset.theme

    if (currentTheme == "light") {
      root.dataset.theme = "dark"
    } else {
      root.dataset.theme = "light"
    }
  }
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
        {navigation.state == "loading" ? (
          <div
            style={{
              height: "60vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LoadingSpinner width="120px" height="120px" />
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      {/* <footer>
        <p>This is our footer</p>
      </footer> */}
    </>
  )
}

export default App
