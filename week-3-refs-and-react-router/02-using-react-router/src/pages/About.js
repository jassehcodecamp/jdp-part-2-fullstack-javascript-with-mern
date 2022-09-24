import React from "react"
import { Link } from "react-router-dom"

const About = () => {
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
        <h2>This is the About pagex</h2>
      </main>
    </div>
  )
}

export default About
