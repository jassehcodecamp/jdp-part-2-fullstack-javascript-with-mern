import React, { useEffect, useState } from "react"
import "./loader.css"
import "./App.css"

import patternDivider from "./images/pattern-divider-desktop.svg"
import iconDice from "./images/icon-dice.svg"

function App() {
  const [adviceData, setAdviceData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(function () {
    fetchAdvice()
    /* fetch("https://api.adviceslip.com/advice")
      .then(function (response) {
        return response.json() // JavaScript Object Notation
      })
      .then(function (advice) {
        console.log("advice", advice)
        setAdviceData(advice.slip)
        setIsLoading(false)
      }) */
  }, [])

  function fetchAdvice() {
    setIsLoading(true)
    fetch("https://api.adviceslip.com/advice")
      .then(function (response) {
        return response.json() // JavaScript Object Notation
      })
      .then(function (advice) {
        console.log("advice", advice)
        setAdviceData(advice.slip)
        setIsLoading(false)
      })
  }

  return (
    <>
      <main>
        <h1>Advice Generator APP</h1>
        <div className="card">
          <h3>
            Advice #<span id="advice-id">{adviceData && adviceData.id}</span>
            {/* <span id="advice-id">{adviceData ? adviceData.id : ""}</span> */}
          </h3>

          <div className="advice loading">
            {isLoading ? (
              <div className="loader"></div>
            ) : (
              <blockquote id="advice">{adviceData.advice}</blockquote>
            )}
          </div>

          <div className="pattern-divider-wrapper">
            <img
              src={patternDivider}
              className="pattern-divider"
              alt="Pattern Divider"
            />
          </div>

          <button id="advice-generator-button" onClick={fetchAdvice}>
            <img src={iconDice} alt="Button Icon" />
          </button>
        </div>
      </main>

      <footer>
        <div className="attribution">
          <p>
            Challenge by{" "}
            <a
              rel="noreferrer"
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            .
          </p>
        </div>
        <p className="copyright">
          &copy; 2022 JCC - Junior Developer Program. All rights reserved.
        </p>
      </footer>
    </>
  )
}

export default App
