import React, { useEffect, useRef } from "react"
import { createPopper } from "@popperjs/core"
import { Link } from "react-router-dom"

function App() {
  return (
    <div>
      <header>
        <h1>Routing With React Router</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>This is the Homepage</h2>
      </main>
    </div>
  )
}

export default App
