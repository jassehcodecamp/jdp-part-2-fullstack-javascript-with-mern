import { Link, Outlet } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      <header>
        <div>
          <h1>
            <Link to="/">Where in the world?</Link>
          </h1>

          <div>
            <span>Dark Mode</span>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      {/* <footer>
        <p>This is our footer</p>
      </footer> */}
    </>
  )
}

export default App
